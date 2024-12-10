import { useState, useEffect } from 'react';
import { 
  ChartBarIcon, 
  ExclamationCircleIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    totalExpenses: 0,
    activeEmployees: 0
  });

  useEffect(() => {
    // TODO: Replace with actual API calls
    setStats({
      totalProducts: 150,
      lowStock: 12,
      totalExpenses: 25000,
      activeEmployees: 8
    });
  }, []);

  const statCards = [
    { 
      title: 'Total Products', 
      value: stats.totalProducts,
      icon: ChartBarIcon,
      color: 'bg-blue-500' 
    },
    { 
      title: 'Low Stock', 
      value: stats.lowStock,
      icon: ExclamationCircleIcon,
      color: 'bg-red-500' 
    },
    { 
      title: 'Total Expenses', 
      value: `$${stats.totalExpenses.toLocaleString()}`,
      icon: CurrencyDollarIcon,
      color: 'bg-green-500' 
    },
    { 
      title: 'Active Employees', 
      value: stats.activeEmployees,
      icon: UserGroupIcon,
      color: 'bg-purple-500' 
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      {/* Stats cards */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map(({ title, value, icon: Icon, color }) => (
          <div key={title} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`rounded-md ${color} p-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                    <dd className="text-lg font-semibold text-gray-900">{value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for charts section */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Monthly Expenses</h2>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart coming soon...</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Stock Levels</h2>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
} 