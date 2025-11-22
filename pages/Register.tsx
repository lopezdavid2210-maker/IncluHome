import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Role } from '../types';

interface Props {
  isHighContrast: boolean;
}

export default function Register({ isHighContrast }: Props) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registro exitoso. Por favor inicie sesión.");
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12">
      <div className={`w-full max-w-lg p-8 rounded-xl shadow-2xl ${isHighContrast ? 'border-2 border-yellow-400' : 'bg-white'}`}>
        <h2 className="text-3xl font-bold mb-6 text-center">Registrarse</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Nombres</label>
              <input type="text" required className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`} />
            </div>
            <div>
              <label className="block mb-1 font-medium">Apellidos</label>
              <input type="text" required className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`} />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Documento de Identidad</label>
            <input type="text" required className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`} />
          </div>

          <div>
            <label className="block mb-1 font-medium">Correo Electrónico</label>
            <input type="email" required className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`} />
          </div>

          <div>
            <label className="block mb-1 font-medium">Rol</label>
            <select className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`}>
              <option value={Role.RH}>{Role.RH}</option>
              <option value={Role.SST}>{Role.SST}</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Contraseña</label>
            <input type="password" required className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`} />
          </div>

          <button
            type="submit"
            className={`w-full py-3 mt-4 rounded-lg font-bold text-lg shadow-md transition-transform active:scale-95
              ${isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Completar Registro
          </button>
          
          <div className="text-center mt-4">
             <button 
               type="button"
               onClick={() => navigate('/login')}
               className="underline hover:text-blue-500"
             >
               ¿Ya tienes cuenta? Ingresa aquí
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}
