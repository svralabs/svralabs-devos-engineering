import { Outlet, Link } from 'react-router-dom';
import { Home, LayoutDashboard, Folder, ListTodo, FileText, Settings, LogOut } from 'lucide-react';

const MainLayout = () => {
  const isAuthenticated = true; // Replace with actual auth check

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">SVRALABS</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                <Home className="mr-3" size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                <LayoutDashboard className="mr-3" size={20} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/projects" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                <Folder className="mr-3" size={20} />
                Projects
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                <ListTodo className="mr-3" size={20} />
                Tasks
              </Link>
            </li>
            <li>
              <Link to="/reports" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                <FileText className="mr-3" size={20} />
                Reports
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                <Settings className="mr-3" size={20} />
                Settings
              </Link>
            </li>
            {!isAuthenticated && (
              <li>
                <Link to="/login" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <LogOut className="mr-3" size={20} />
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </aside>
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm p-4">
          <h2 className="text-xl font-semibold">SVRALABS Engineering</h2>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
