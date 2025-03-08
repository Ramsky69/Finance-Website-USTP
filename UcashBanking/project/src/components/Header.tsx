import React from 'react';
import { Search, Bell } from 'lucide-react';

interface HeaderProps {
  userName: string;
  userRole: string;
  userImage: string;
}

export function Header({ userName, userRole, userImage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, {userName}</h1>
        <p className="text-gray-500">Let's take a detailed look at your financial situation today</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="search"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button className="relative">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-medium">{userName}</p>
            <p className="text-sm text-gray-500">{userRole}</p>
          </div>
          <img src={userImage} alt={userName} className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </header>
  );
}