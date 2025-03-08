import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wallet } from 'lucide-react';
import { auth } from '../lib/api';

export function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await auth.register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      navigate('/dashboard');
    } catch (err: any) {
      setError(
        err.response?.data?.detail || 
        'Registration failed. Please check your information and try again.'
      );
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
        <h2 className="text-2xl font-bold mb-6">REGISTER</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded">
              {error}
            </div>
          )}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            SIGN UP
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}