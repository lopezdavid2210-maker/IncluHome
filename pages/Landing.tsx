import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isHighContrast: boolean;
}

export default function Landing({ isHighContrast }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-2xl w-full space-y-8">
        <div className="space-y-4">
          <h1 className={`text-5xl font-bold ${isHighContrast ? 'text-yellow-400' : 'text-blue-700'}`}>
            IncluHome
          </h1>
          <p className={`text-xl ${isHighContrast ? 'text-white' : 'text-gray-600'}`}>
            Plataforma integral para el monitoreo del estado emocional y bienestar laboral.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <button
            onClick={() => navigate('/register')}
            className={`px-8 py-4 rounded-lg text-lg font-bold shadow-lg transform transition hover:-translate-y-1 
              ${isHighContrast 
                ? 'bg-black border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Registrarse
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className={`px-8 py-4 rounded-lg text-lg font-bold shadow-lg transform transition hover:-translate-y-1
              ${isHighContrast 
                ? 'bg-yellow-400 text-black border-2 border-yellow-400' 
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'}`}
          >
            Ingresar
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-sm opacity-70">
        <p>Acceso universal y diseño inclusivo.</p>
      </div>
    </div>
  );
}
