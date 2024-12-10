/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

export default function Sidebar({ isOpen, onClose }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navigation = [
    { name: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Products', icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' },
    { name: 'Add Products', icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' },
    { name: 'Expenses', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Employees', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  ]

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
      )}

      {/* Sidebar component */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          ${isCollapsed ? 'w-16 sm:w-20' : 'w-[200px] sm:w-64'}
          lg:translate-x-0 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="h-16 flex items-center justify-between border-b relative px-4">
            {/* Brand name - only visible on larger screens when not collapsed */}
            {!isCollapsed && (
              <div className={`sm:block ${isMobile ? 'hidden' : 'block'}`}>
                <span className="text-xl font-bold text-indigo-600">IMS</span>
              </div>
            )}
            
            {/* Toggle button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none transition-all duration-300 ease-in-out
                ${isCollapsed || isMobile ? 'mx-auto' : 'ml-auto'}`}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? (
                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`group flex items-center px-2 py-2.5 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200
                    ${isCollapsed || isMobile ? 'justify-center' : 'justify-start'}`}
                  title={isCollapsed || isMobile ? item.name : ''}
                >
                  <svg
                    className={`flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-gray-500 transition-colors duration-200
                      ${isCollapsed || isMobile ? '' : 'mr-3'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {!isCollapsed && !isMobile && (
                    <span className="truncate">{item.name}</span>
                  )}
                </a>
              ))}
            </div>
          </nav>

          {/* Bottom section - can be used for user profile or logout */}
          <div className="border-t border-gray-200 p-4">
            <div className={`flex ${isCollapsed || isMobile ? 'justify-center' : 'items-center space-x-3'}`}>
              {!isCollapsed && !isMobile && (
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">John Doe</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              )}
              <button
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-500"
                aria-label="User settings"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
} 