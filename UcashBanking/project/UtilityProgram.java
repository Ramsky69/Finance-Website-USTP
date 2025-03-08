import java.util.Scanner;

public class UtilityProgram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("\nSelect an option:");
            System.out.println("1. Check if a word is a palindrome");
            System.out.println("2. Calculate GCD of two numbers");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            
            switch (choice) {
                case 1:
                    System.out.print("Enter a word: ");
                    String word = scanner.nextLine();
                    if (isPalindrome(word)) {
                        System.out.println(word + " is a palindrome");
                    } else {
                        System.out.println(word + " is not a palindrome");
                    }
                    break;
                
                case 2:
                    System.out.print("Enter first integer: ");
                    int num1 = scanner.nextInt();
                    
                    System.out.print("Enter second integer: ");
                    int num2 = scanner.nextInt();
                    
                    int gcd = findGCD(num1, num2);
                    System.out.println("The greatest common divisor for " + num1 + " and " + num2 + " is " + gcd);
                    break;
                
                case 3:
                    System.out.println("Exiting program...");
                    scanner.close();
                    return;
                
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
    
    // Method to check if palindrome
    public static boolean isPalindrome(String str) {
        int length = str.length();
        for (int i = 0; i < length / 2; i++) {
            if (str.charAt(i) != str.charAt(length - i - 1)) {
                return false;
            }
        }
        return true;
    }
    
    // Method to find GCD 
    public static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
