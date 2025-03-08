import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  Receipt, 
  Bell, 
  User, 
  CreditCard, 
  Settings,
  PhoneCall,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: LineChart, label: 'Overview', path: '/dashboard/overview' },
  { icon: Receipt, label: 'Transaction', path: '/dashboard/transaction' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
  { icon: User, label: 'Account', path: '/dashboard/account' },
  { icon: CreditCard, label: 'My Card', path: '/dashboard/my-card' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

const bottomMenuItems = [
  { icon: PhoneCall, label: 'Call Center', path: '/dashboard/call-center' },
  { icon: HelpCircle, label: 'Help', path: '/dashboard/help' },
  { icon: LogOut, label: 'Log Out', path: '/logout' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-[#1C1C1C] text-white h-screen flex flex-col">
      <div className="p-6">
        <img src="/logo.svg" alt="UCash" className="h-8" />
      </div>
      
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors',
                isActive && 'bg-gray-800 text-white'
              )
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="px-4 pb-6">
        {bottomMenuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}