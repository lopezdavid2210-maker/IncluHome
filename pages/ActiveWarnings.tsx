import React from 'react';
import { MOCK_ALERTS } from '../constants';
import { MessageCircle, Share } from 'lucide-react';

interface Props {
  isHighContrast: boolean;
}

export default function ActiveWarnings({ isHighContrast }: Props) {
  const handleSendMessage = (name: string) => {
    alert(`Enviando mensaje a ${name}...`);
  };

  const handleExport = () => {
    alert("Exportando lista de alertas...");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Advertencias Activas</h2>
        <button 
          onClick={handleExport}
          className={`flex items-center gap-2 px-4 py-2 rounded font-bold ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          <Share size={18} /> Exportar
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className={`w-full text-left border-collapse ${isHighContrast ? 'border border-yellow-400' : 'shadow-lg rounded-lg overflow-hidden'}`}>
          <thead className={isHighContrast ? 'bg-yellow-400 text-black' : 'bg-red-50 text-red-900'}>
            <tr>
              <th className="p-4">Nombre</th>
              <th className="p-4">Cargo</th>
              <th className="p-4">Discapacidad</th>
              <th className="p-4">Última Alerta</th>
              <th className="p-4">Motivo</th>
              <th className="p-4">Estado</th>
              <th className="p-4">Acción</th>
            </tr>
          </thead>
          <tbody className={isHighContrast ? 'bg-black text-white' : 'bg-white'}>
            {MOCK_ALERTS.map((alert) => (
              <tr key={alert.id} className={`border-b ${isHighContrast ? 'border-gray-700' : 'border-gray-100'}`}>
                <td className="p-4 font-bold">{alert.employeeName}</td>
                <td className="p-4">{alert.employeeRole}</td>
                <td className="p-4">{alert.disability}</td>
                <td className="p-4">{alert.lastAlert}</td>
                <td className="p-4">{alert.reason}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-sm font-bold ${
                    alert.status === 'Pendiente' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {alert.status}
                  </span>
                </td>
                <td className="p-4">
                  <button 
                    onClick={() => handleSendMessage(alert.employeeName)}
                    className={`p-2 rounded-full transition-colors ${isHighContrast ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                    aria-label="Enviar mensaje"
                  >
                    <MessageCircle size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
