import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("DailyTransiction");

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <section id="Dashboard">
      <nav className="bg-white shadow-lg border-b w-full flex gap-3 justify-center p-4">
        <Link
          to="/"
          onClick={() => handleItemClick("DailyTransiction")}
        >
          <button
            className={`p-3 border rounded-lg transition-all duration-200 ${
              activeItem === "DailyTransiction"
                ? "bg-blue-500 text-white border-blue-500 shadow-md transform scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm"
            }`}
          >
            Daily Transaction
          </button>
        </Link>

        <Link
          to="/Firms"
          onClick={() => handleItemClick("Firms")}
        >
          <button  className={`p-3 border rounded-lg transition-all duration-200 ${
              activeItem === "Firms"
                ? "bg-blue-500 text-white border-blue-500 shadow-md transform scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm"
            }`}>
            Firms
          </button>
        </Link>

        <Link
          to="/Account"
          onClick={() => handleItemClick("Account")}
        >
          <button  className={`p-3 border rounded-lg transition-all duration-200 ${
              activeItem === "Account"
                ? "bg-blue-500 text-white border-blue-500 shadow-md transform scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm"
            }`}>
            Account
          </button>
        </Link>
      </nav>
    </section>
  );
}
