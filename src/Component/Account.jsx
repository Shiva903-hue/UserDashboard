
import React, { useState } from 'react';
import Deposit from './Pages/Forms/Deposit';
import BankMasterForm from './Pages/Forms/BankMasterForm';
import WithdrawalForm from './Pages/Forms/WithdrawalForm';
import { Menu, X } from 'lucide-react';

export default function Account() {
  const [activeItem, setActiveItem] = useState('Create_Bank');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'Create_Bank', label: 'Create Bank', href: '#BankForm' },
    { id: 'Deposit', label: 'Deposit', href: '#Deposit' },
    { id: 'Withdrawal', label: 'Withdrawal', href: '#Withdrawal' },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const SidebarNav = () => (
    <nav id="VNav" className="flex flex-col p-4 space-y-2">
      <div className="mb-6 px-3 py-2">
        <h2 className="text-xl font-bold text-gray-800">Menu</h2>
      </div>
      
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleItemClick(item.id);
          }}
          className={`block w-full text-left p-3 rounded-lg border transition-all duration-200 ${
            activeItem === item.id
              ? 'bg-blue-500 text-white border-blue-500 shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <header className="md:hidden w-full fixed top-0 bg-white shadow-md z-20 flex justify-between items-center p-4">
        <h2 className="text-xl font-bold text-gray-800">Account</h2>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <aside className={`fixed inset-0 bg-white z-10 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden pt-20`}>
        <SidebarNav />
      </aside>
      
      <aside className="hidden md:block w-64 bg-white shadow-lg flex-shrink-0">
        <SidebarNav />
      </aside>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 mt-16 md:mt-0 pb-24 md:pb-8">
        {activeItem === 'Create_Bank' && <BankMasterForm />}
        {activeItem === 'Deposit' && <Deposit />}
        {activeItem === 'Withdrawal' && <WithdrawalForm />}
      </main>
    </div>
  );
}

