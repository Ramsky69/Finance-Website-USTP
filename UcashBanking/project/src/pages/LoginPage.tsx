import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wallet } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex">
      <div className="flex-1 flex items-center justify-center">
        <Link to="/" className="flex items-center gap-2">
          <Wallet size={64} className="text-white" />
          <div className="text-white">
            <h1 className="text-3xl font-bold">UCASH</h1>
            <p className="text-sm">BETTER SAVINGS, BETTER LIFE</p>
          </div>
        </Link>
      </div>

      <div className="w-[480px] bg-white p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">LOGIN</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded">
              {error}
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            SIGN IN
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-purple-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}