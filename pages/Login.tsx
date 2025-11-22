import React, { useState } from 'react';
import { Role } from '../types';

interface Props {
  onLogin: () => void;
  isHighContrast: boolean;
}

export default function Login({ onLogin, isHighContrast }: Props) {
  const [role, setRole] = useState<Role>(Role.RH);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock validation
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className={`w-full max-w-md p-8 rounded-xl shadow-2xl ${isHighContrast ? 'border-2 border-yellow-400' : 'bg-white'}`}>
        <h2 className="text-3xl font-bold mb-6 text-center">Ingresar</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Rol</label>
            <select 
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`}
            >
              <option value={Role.RH}>{Role.RH}</option>
              <option value={Role.SST}>{Role.SST}</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Correo Electrónico</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`}
              placeholder="usuario@empresa.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Contraseña</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 rounded-lg border ${isHighContrast ? 'bg-black border-yellow-400' : 'border-gray-300'}`}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-bold text-lg shadow-md transition-transform active:scale-95
              ${isHighContrast 
                ? 'bg-yellow-400 text-black' 
                : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
