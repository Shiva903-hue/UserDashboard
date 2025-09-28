import React, { useState } from 'react';
import Deposit from './Pages/Forms/Deposit';
import BankMasterForm from './Pages/Forms/BankMasterForm';
import WithdrawalForm from './Pages/Forms/WithdrawalForm';
import MyBank from './Pages/Forms/MyBank';
import Sidebar from './Pages/Sidebar';// <--- NEW IMPORT

export default function Account() {
  const [activeItem, setActiveItem] = useState('Create_Bank');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'Create_Bank', label: 'Create Bank', href: '#BankForm' },
    { id: 'Deposit', label: 'Deposit', href: '#Deposit' },
    { id: 'Withdrawal', label: 'Withdrawal', href: '#Withdrawal' },
    { id: 'MyBank', label: 'MyBank', href: '#MyBank' },
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
        title="Account"
        navItems={navItems}
        activeItem={activeItem}
        handleItemClick={handleItemClick}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 mt-16 md:mt-0 pb-24 md:pb-8">
        {activeItem === 'Create_Bank' && <BankMasterForm />}
        {activeItem === 'Deposit' && <Deposit />}
        {activeItem === 'Withdrawal' && <WithdrawalForm />}
        {activeItem === 'MyBank' && <MyBank/>}
      </main>
    </div>
  );
}