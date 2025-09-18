import React, { useState } from 'react';
import Deposit from './Pages/Forms/Deposit';
import BankMasterForm from './Pages/Forms/BankMasterForm';
import WithdrawalForm from './Pages/WithdrawalForm';

export default function Account() {
  const [activeItem, setActiveItem] = useState('Create_Bank');

  const navItems = [
    { id: 'Create_Bank', label: 'Create Bank', href: '#BankForm' },
    { id: 'Deposit', label: 'Deposit', href: '#Deposit' },
    { id: 'Withdrawal', label: 'Withdrawal', href: '#Withdrawal' },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <section className="w-64 bg-white shadow-lg">
        <nav id="VNav" className="flex flex-col p-4 space-y-2">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 px-3 py-2">Menu</h2>
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
                  ? 'bg-blue-500 text-white border-blue-500 shadow-md transform scale-105'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </section>

     
      <main className="flex-1 p-2">

          {activeItem === 'Create_Bank' && <BankMasterForm/>}

          {activeItem === 'Deposit' && <Deposit/> }

          {activeItem === 'Withdrawal' && <WithdrawalForm/> }

      </main>
    </div>
  );
}