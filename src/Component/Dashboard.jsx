//! 3
import React, { useState } from "react";
import {
  Landmark,
  Briefcase,
  DollarSign,
  CircleUserRoundIcon,
  Handshake,
} from "lucide-react";
import DailyTransaction from "./DailyTransiction";
import Vendor from "./Vendor";
import Account from "./Account";
import school from '../assets/school.png'

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("DailyTransaction");

  const navLinks = [
    {
      id: "DailyTransaction",
      label: "Daily Expenses",
      icon: DollarSign,
    },
    {
      id: "Firms",
      label: "Vendor",
      icon: Handshake,
    },
    {
      id: "Account",
      label: "Account",
      icon: Landmark,
    },
  ];

  const renderComponent = () => {
    switch (activeItem) {
      case "DailyTransaction":
        return <DailyTransaction />;
      case "Firms":
        return <Vendor />;
      case "Account":
        return <Account />;
    }
  };

  const handleNavClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav Bar */}
      <header>
        {/* Desktop Top Navigation items-center justify-center  */}
        <nav className="hidden md:flex  justify-between items-center bg-white shadow-sm border-b w-full p-4 gap-4">
          {/* SCHOOL LOGO */}
         <div className="flex items-center gap-3">
               <img src={school} alt="school logo" className="w-12 h-12 rounded-xl" />
               <span className="text-xl font-extrabold text-blue-700">School Finance</span>
             </div>


          {/* <MAIN NAV */}
          <div className=" flex flex-wrap gap-2" >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 px-5 border rounded-lg transition-all duration-200 text-sm font-medium ${
                  activeItem === link.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* LOGOUT */}
          <button className="py-2 px-5 border rounded-lg transition-all duration-200 text-sm font-medium hover:bg-red-200 text-red-500 border-red-500 bg-white hover:shadow-md ">
            LogOut
          </button>
        </nav>

        {/* Mobile Bottom Tab Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 flex justify-around items-center z-50">

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeItem === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex flex-col items-center justify-center text-center w-full py-2 px-1 transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span
                  className={`mt-1 text-xs font-medium ${
                    isActive ? "font-bold" : ""
                  }`}
                >
                  {link.label}
                </span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content Section */}
      <section>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 mt-0 pb-24 md:pb-8">
          {/* Dynamic Component Rendering */}
          {renderComponent()}
        </main>
      </section>
    </div>
  );
}

