import React from 'react';
import { MOCK_APPOINTMENTS } from '../constants';

interface Props {
  isHighContrast: boolean;
}

export default function Appointments({ isHighContrast }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Citas Programadas</h2>
      
      <div className="grid gap-4">
        {MOCK_APPOINTMENTS.map((apt) => (
          <div 
            key={apt.id} 
            className={`p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4
              ${isHighContrast ? 'border border-yellow-400 bg-black' : 'bg-white'}`}
          >
            <div>
              <h3 className="text-xl font-bold">{apt.employeeName}</h3>
              <p className="opacity-80">{apt.employeeRole} - {apt.modality}</p>
              <p className="mt-2 text-sm font-mono">{apt.date} a las {apt.time}</p>
            </div>
            
            <div className="flex flex-col md:items-end gap-1">
              <p className="font-medium">{apt.psychologist}</p>
              <p className="text-sm italic opacity-75">{apt.reason}</p>
              <span className={`mt-2 px-3 py-1 rounded-full text-xs font-bold inline-block
                ${apt.status === 'Confirmada' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {apt.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
