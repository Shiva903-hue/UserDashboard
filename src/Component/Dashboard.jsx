import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Landmark, Briefcase, DollarSign , CircleUserRoundIcon , Handshake } from 'lucide-react';

export default function Dashboard() {
  const location = useLocation();
  const activePath = location.pathname;

  const navLinks = [
    {
      path: "/",
      id: "DailyExpenses",
      label: "Daily Expenses",
      icon: DollarSign
    },
    {
      path: "/Firms",
      id: "Firms",
      label: "Vendor",
      icon: Handshake
    },
    {
      path: "/Account",
      id: "Account",
      label: "Account",
      icon: Landmark
    }
  ];

  return (
    <header>
      <nav className="hidden md:flex bg-white shadow-sm border-b w-full items-center justify-center p-4 gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
          >
            <button
              className={`py-2 px-5 border rounded-lg transition-all duration-200 text-sm font-medium ${
                activePath === link.path
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
              }`}
            >
              {link.label}
            </button>
          </Link>
        ))}
      </nav>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 flex justify-around items-center z-50">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activePath === link.path;
          return (
            <Link
              key={link.id}
              to={link.path}
              className={`flex flex-col items-center justify-center text-center w-full py-2 px-1 transition-colors duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`mt-1 text-xs font-medium ${isActive ? 'font-bold' : ''}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
