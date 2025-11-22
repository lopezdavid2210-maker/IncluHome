import React, { useState, useEffect } from 'react';
import { Accessibility, Eye, Type, ZoomIn, ZoomOut, X } from 'lucide-react';

interface AccessibilityToolProps {
  toggleHighContrast: () => void;
  isHighContrast: boolean;
  changeFontSize: (increment: number) => void;
  fontSize: number;
}

export const AccessibilityTool: React.FC<AccessibilityToolProps> = ({ 
  toggleHighContrast, 
  isHighContrast, 
  changeFontSize,
  fontSize 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className={`p-4 rounded-lg shadow-xl mb-2 flex flex-col gap-3 min-w-[200px] ${isHighContrast ? 'border-2 border-yellow-400 bg-black' : 'bg-white border border-gray-200'}`}>
          <div className="flex justify-between items-center">
            <h3 className={`font-bold ${isHighContrast ? 'text-yellow-400' : 'text-gray-800'}`}>Accesibilidad</h3>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-200 rounded">
              <X size={20} />
            </button>
          </div>

          <button 
            onClick={toggleHighContrast}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isHighContrast ? 'bg-yellow-400 text-black font-bold' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
          >
            <Eye size={18} />
            {isHighContrast ? 'Desactivar Alto Contraste' : 'Activar Alto Contraste'}
          </button>

          <div className="flex items-center justify-between gap-2">
            <button 
              onClick={() => changeFontSize(-2)}
              className={`p-2 rounded-md flex-1 flex justify-center ${isHighContrast ? 'border border-yellow-400' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Disminuir texto"
            >
              <ZoomOut size={18} />
            </button>
            <span className="font-mono">{fontSize}px</span>
            <button 
              onClick={() => changeFontSize(2)}
              className={`p-2 rounded-md flex-1 flex justify-center ${isHighContrast ? 'border border-yellow-400' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Aumentar texto"
            >
              <ZoomIn size={18} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all transform hover:scale-110 focus:outline-none focus:ring-4 ${
          isHighContrast 
            ? 'bg-yellow-400 text-black border-4 border-white' 
            : 'bg-blue-600 text-white focus:ring-blue-300'
        }`}
        aria-label="Menú de accesibilidad"
      >
        <Accessibility size={32} />
      </button>
    </div>
  );
};
