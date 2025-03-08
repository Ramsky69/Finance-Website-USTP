import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet size={32} />
          <span className="text-2xl font-bold">UCash</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link 
            to="/register" 
            className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            Start for free
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            Save and monitor your Finance with us.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We believe that when you save smarter, you live better. Our platform is
            designed to help you build strong financial habits that lead to long-term
            stability and success.
          </p>
          <Link
            to="/register"
            className="inline-block bg-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            REGISTER NOW
          </Link>
        </div>
      </main>
    </div>
  );
}