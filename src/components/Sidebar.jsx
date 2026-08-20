import { useState } from 'react';
import { Home, BarChart2, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { name: 'Analytics', icon: <BarChart2 className="h-5 w-5" /> },
    { name: 'Users', icon: <Users className="h-5 w-5" /> },
    { name: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className={`bg-white shadow-sm ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <nav className="px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                onClick={() => setActiveItem(item.name)}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  activeItem === item.name
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.icon}
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center justify-center w-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
            {!isCollapsed && <span className="ml-2">Collapse</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
