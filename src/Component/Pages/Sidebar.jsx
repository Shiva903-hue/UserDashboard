import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar({
  title,
  navItems,
  activeItem,
  handleItemClick,
  isSidebarOpen,
  setIsSidebarOpen
}) {
  
  // Renders the list of navigation links
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
              ? 'bg-blue-500 text-white border-blue-500 shadow-md transform scale-105'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile Header with Hamburger Menu */}
      <header className="md:hidden w-full fixed top-0 bg-white shadow-md z-20 flex justify-between items-center p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Sidebar (overlay) */}
      <aside className={`fixed inset-0 bg-white z-10 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden pt-16`}>
        <SidebarNav />
      </aside>
      
      {/* Desktop Sidebar (static) */}
      <aside className="hidden md:block w-64 bg-white shadow-lg flex-shrink-0">
        <SidebarNav />
      </aside>
    </>
  );
}