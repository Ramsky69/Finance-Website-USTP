from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.db.models import Sum
from datetime import datetime
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Transaction, Budget, Account
from .serializers import TransactionSerializer, BudgetSerializer, AccountSerializer, UserSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """
    Registers a new user.
    """
    print("Received Registration Data:", request.data)  # ✅ Debug incoming data

    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data['password'])  # ✅ Hash password before saving
        user.save()

        refresh = RefreshToken.for_user(user)  # Generate JWT tokens

        print("User Created Successfully:", serializer.data)  # ✅ Debugging

        return Response({
            'user': serializer.data,
            'access_token': str(refresh.access_token),  # ✅ Return both tokens
            'refresh_token': str(refresh)
        }, status=status.HTTP_201_CREATED)

    print("Validation Errors:", serializer.errors)  # ✅ Debug errors
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TransactionViewSet(viewsets.ModelViewSet):
    """
    Handles Transactions: List, Create, Update, Delete.
    """
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Transaction.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'])
    def summary(self, request):
        """
        Returns a summary of total income and expenses for the current month.
        """
        today = datetime.now()
        transactions = Transaction.objects.filter(
            user=request.user,
            date__year=today.year,
            date__month=today.month
        )

        total_income = transactions.filter(transaction_type='INCOME').aggregate(Sum('amount'))['amount__sum'] or 0
        total_expenses = transactions.filter(transaction_type='EXPENSE').aggregate(Sum('amount'))['amount__sum'] or 0

        summary = {
            'total_income': total_income,
            'total_expenses': total_expenses,
        }

        return Response(summary)


class BudgetViewSet(viewsets.ModelViewSet):
    """
    Handles Budgets: List, Create, Update, Delete.
    """
    serializer_class = BudgetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Budget.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AccountViewSet(viewsets.ModelViewSet):
    """
    Handles Accounts: List, Create, Update, Delete.
    """
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Account.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
