import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendor from "./Component/Vendor";
import Account from "./Component/Account";
import Dashboard from "./Component/Dashboard";
import DailyTransiction from "./Component/DailyTransiction";
import Login from "./Component/Auth/Login";
import school from "./assets/school.png";
import Ragistration from "./Component/Auth/Ragistration";

// Splash Screen Component
function SplashScreen({ isVisible }) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white text-3xl transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* <h1 className="text-5xl font-bold animate-bounce">🚀 MyApp</h1> */}
      <div className="text-5xl font-bold animate-bounce">
        <img src={school} alt="LOGO" className="h-14 w-14 " />
      </div>
      {/* <p className="mt-4 text-lg animate-pulse">Loading...</p> */}
    </div>
  );
}
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(false);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="relative">
      {showSplash && <SplashScreen isVisible={fadeOut} />}

      {!showSplash && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Ragistration" element={<Ragistration />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/DailyExpenses" element={<DailyTransiction />} />
            <Route path="/Firms" element={<Vendor />} />
            <Route path="/Account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
