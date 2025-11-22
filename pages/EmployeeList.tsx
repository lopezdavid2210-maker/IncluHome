import React, { useState } from 'react';
import { MOCK_EMPLOYEES } from '../constants';
import { FileText, Filter } from 'lucide-react';

interface Props {
  isHighContrast: boolean;
}

export default function EmployeeList({ isHighContrast }: Props) {
  const [areaFilter, setAreaFilter] = useState('');

  const filteredEmployees = areaFilter 
    ? MOCK_EMPLOYEES.filter(e => e.area.includes(areaFilter))
    : MOCK_EMPLOYEES;

  const handleViewReport = (name: string) => {
    alert(`Abriendo reporte individual de ${name}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-bold">Lista de Empleados</h2>
        
        <div className="flex items-center gap-2">
            <Filter size={20} />
            <select 
                onChange={(e) => setAreaFilter(e.target.value)}
                className={`p-2 rounded border ${isHighContrast ? 'bg-black border-yellow-400' : 'bg-white border-gray-300'}`}
            >
                <option value="">Todas las áreas</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Marketing">Marketing</option>
                <option value="Finanzas">Finanzas</option>
            </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredEmployees.map((emp) => (
            <div key={emp.id} className={`p-5 rounded-lg shadow-lg flex flex-col justify-between ${isHighContrast ? 'border border-yellow-400 bg-black' : 'bg-white'}`}>
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold">{emp.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${isHighContrast ? 'border border-white' : 'bg-blue-50 text-blue-700'}`}>
                            {emp.area}
                        </span>
                    </div>
                    <p className="text-sm opacity-90 mb-1">{emp.role}</p>
                    <p className="text-sm font-medium mb-3">Discapacidad: {emp.disability}</p>
                    
                    <div className={`text-sm p-2 rounded mb-4 ${isHighContrast ? 'bg-gray-900' : 'bg-gray-50'}`}>
                        <p>Antigüedad: {emp.timeInCompany}</p>
                        <p>Citas Psicología: {emp.psychologyAppointments}</p>
                    </div>
                </div>

                <button 
                    onClick={() => handleViewReport(emp.name)}
                    className={`w-full py-2 rounded flex items-center justify-center gap-2 font-bold transition-colors
                    ${isHighContrast ? 'bg-white text-black hover:bg-gray-200' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}
                >
                    <FileText size={18} /> Ver Reporte
                </button>
            </div>
        ))}
      </div>
    </div>
  );
}
