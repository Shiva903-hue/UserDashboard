import React, { useState } from 'react';
import DebitAndCredit from './Pages/DebitAndCredit';
import JournalVoucher from './Pages/JournalVoucher';
import StatusView from './Pages/StatusView';

export default function VerticalNavbar() {
  const [activeItem, setActiveItem] = useState('debit-credit');

  const navItems = [
    { id: 'debit-credit', label: 'Debit & Credit', href: '#debit-credit' },
    { id: 'jurnal-voucher', label: 'Jurnal Voucher', href: '#jurnal-voucher' },
    { id: 'status-view', label: 'Status View', href: '#status-view' }
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

     
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
          
         
          {activeItem === 'debit-credit' && <DebitAndCredit/> }
          
          {activeItem === 'jurnal-voucher' && <JournalVoucher/>}
          
          {activeItem === 'status-view' && <StatusView/>}
        </div>
      </main>
    </div>
  );
}