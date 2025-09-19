import React, { useState } from 'react';
import Transaction from './Pages/Transaction';
import StatusView from './Pages/StatusView';
import VoucherForm from './Pages/Forms/VoucherForm';

export default function VerticalNavbar() {
  const [activeItem, setActiveItem] = useState('VoucherForm');

  const navItems = [
    { id: 'VoucherForm', label: 'VoucherForm', href: '#VoucherForm' },
    { id: 'Transaction', label: 'Transaction', href: '#Transaction' },
    // { id: 'jurnal-voucher', label: 'Jurnal Voucher', href: '#jurnal-voucher' },
    { id: 'status-view', label: 'Status View', href: '#status-view' },
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

          {activeItem === 'Transaction' && <Transaction/> }
          
          {/* {activeItem === 'jurnal-voucher' && <JournalVoucher/>} */}
          
          {activeItem === 'status-view' && <StatusView/>}
          
          {/* {activeItem === 'VoucherForm' && <RequestForm/>} */}
          {activeItem === 'VoucherForm' && <VoucherForm/>}

      </main>
    </div>
  );
}