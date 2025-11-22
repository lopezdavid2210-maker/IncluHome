import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, AlertTriangle, Calendar, Users, Mail } from 'lucide-react';

interface Props {
  isHighContrast: boolean;
}

export default function Dashboard({ isHighContrast }: Props) {
  const navigate = useNavigate();

  const options = [
    { title: 'Reporte Mensual', path: '/report', icon: BarChart3, color: 'bg-indigo-500' },
    { title: 'Advertencias Activas', path: '/warnings', icon: AlertTriangle, color: 'bg-red-500', count: 2 },
    { title: 'Citas Programadas', path: '/appointments', icon: Calendar, color: 'bg-green-500' },
    { title: 'Lista de Empleados', path: '/employees', icon: Users, color: 'bg-blue-500' },
    { title: 'Mensajes Recibidos', path: '/messages', icon: Mail, color: 'bg-orange-500', count: 5 },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Panel Principal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((opt) => (
          <button
            key={opt.path}
            onClick={() => navigate(opt.path)}
            className={`p-6 rounded-xl shadow-lg transition-all hover:scale-105 flex flex-col items-center text-center gap-4 group
              ${isHighContrast 
                ? 'border-2 border-yellow-400 bg-black hover:bg-gray-900' 
                : 'bg-white hover:bg-gray-50'}`}
          >
            <div className={`p-4 rounded-full ${isHighContrast ? 'bg-yellow-400 text-black' : `${opt.color} text-white`}`}>
              <opt.icon size={32} />
            </div>
            
            <h3 className="text-xl font-bold">{opt.title}</h3>
            
            {opt.count && (
              <span className={`px-3 py-1 rounded-full text-sm font-bold
                ${isHighContrast ? 'bg-white text-black' : 'bg-red-100 text-red-800'}`}>
                {opt.count} Pendientes
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
