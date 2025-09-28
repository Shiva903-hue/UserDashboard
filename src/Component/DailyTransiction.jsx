import React, { useState } from 'react';
// import Transaction from './Pages/Transaction'; 
// import TransactionForm from './Forms/TransactionForm'
import StatusView from './Pages/StatusView';
import VoucherForm from './Pages/Forms/VoucherForm'; 
import TransactionForm from './Pages/Forms/TransactionForm'; 
import Sidebar from './Pages/Sidebar';// <--- NEW IMPORT

export default function DailyTransaction() {
  const [activeItem, setActiveItem] = useState('VoucherForm');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'VoucherForm', label: 'Voucher Form', href: '#VoucherForm' },
    { id: 'Transaction', label: 'Transaction', href: '#Transaction' },
    { id: 'status-view', label: 'Status View', href: '#status-view' },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    // Auto-close sidebar on mobile after click
    if (window.innerWidth < 768) { 
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar
        title="Daily Expenses"
        navItems={navItems}
        activeItem={activeItem}
        handleItemClick={handleItemClick}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
       <main className="flex-1 p-4 sm:p-6 lg:p-8 mt-16 md:mt-0 pb-24 md:pb-8">
        {activeItem === 'Transaction' && <TransactionForm/>}
        {activeItem === 'status-view' && <StatusView />}
        {activeItem === 'VoucherForm' && <VoucherForm />}
      </main>
    </div>
  );
}