import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart3, AlertTriangle, Calendar, Users, Mail, LogOut, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  isHighContrast: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, onLogout, isHighContrast }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Inicio', icon: LayoutDashboard },
    { path: '/report', label: 'Reporte Mensual', icon: BarChart3 },
    { path: '/warnings', label: 'Advertencias', icon: AlertTriangle },
    { path: '/appointments', label: 'Citas', icon: Calendar },
    { path: '/employees', label: 'Empleados', icon: Users },
    { path: '/messages', label: 'Mensajes', icon: Mail },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isHighContrast ? 'border-r-2 border-yellow-400 bg-black' : 'bg-white border-r border-gray-200'}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-center border-b border-gray-200">
            <h1 className={`text-2xl font-bold ${isHighContrast ? 'text-yellow-400' : 'text-blue-600'}`}>IncluHome</h1>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium
                    ${isActive 
                      ? (isHighContrast ? 'bg-yellow-400 text-black font-bold' : 'bg-blue-50 text-blue-700') 
                      : (isHighContrast ? 'text-yellow-400 hover:bg-gray-900' : 'text-gray-600 hover:bg-gray-50')
                    }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200">
            <button
              onClick={onLogout}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors
                ${isHighContrast ? 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' : 'text-red-600 hover:bg-red-50'}`}
            >
              <LogOut size={20} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className={`lg:hidden flex items-center p-4 border-b ${isHighContrast ? 'border-yellow-400' : 'bg-white border-gray-200'}`}>
          <button onClick={() => setSidebarOpen(true)} className="p-2 mr-4">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-bold">IncluHome</h1>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
