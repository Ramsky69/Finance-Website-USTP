import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Wallet, CreditCard, ArrowRight } from 'lucide-react';

const data = [
  { name: 'Jan', amount: 4000 },
  { name: 'Feb', amount: 3000 },
  { name: 'Mar', amount: 5000 },
  { name: 'Apr', amount: 2780 },
  { name: 'May', amount: 1890 },
  { name: 'Jun', amount: 2390 },
];

const transactions = [
  {
    id: 1,
    name: 'Netflix Subscription',
    date: '27 Mar 2024',
    amount: -16.99,
    type: 'expense',
  },
  {
    id: 2,
    name: 'Salary Payment',
    date: '25 Mar 2024',
    amount: 2800.00,
    type: 'income',
  },
  {
    id: 3,
    name: 'Grocery Shopping',
    date: '24 Mar 2024',
    amount: -156.85,
    type: 'expense',
  },
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Total Balance</h3>
            <span className="p-2 bg-green-100 text-green-600 rounded-lg">
              <ArrowUpRight size={20} />
            </span>
          </div>
          <p className="text-2xl font-bold">$24,680.00</p>
          <p className="text-sm text-green-600 mt-2">+2.3% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Total Spending</h3>
            <span className="p-2 bg-red-100 text-red-600 rounded-lg">
              <ArrowDownRight size={20} />
            </span>
          </div>
          <p className="text-2xl font-bold">$3,460.00</p>
          <p className="text-sm text-red-600 mt-2">-0.8% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Total Saved</h3>
            <span className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              <Wallet size={20} />
            </span>
          </div>
          <p className="text-2xl font-bold">$8,920.00</p>
          <p className="text-sm text-purple-600 mt-2">+4.3% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500">Card Spending</h3>
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <CreditCard size={20} />
            </span>
          </div>
          <p className="text-2xl font-bold">$1,470.00</p>
          <p className="text-sm text-blue-600 mt-2">+1.2% from last month</p>
        </div>
      </div>

      {/* Chart and Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Income & Expenses</h2>
            <select className="px-4 py-2 border rounded-lg text-gray-600">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <button className="text-purple-600 hover:text-purple-700 flex items-center gap-2">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p className={`font-semibold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}