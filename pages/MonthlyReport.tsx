import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Sparkles } from 'lucide-react';
import { generateInsight } from '../services/geminiService';

interface Props {
  isHighContrast: boolean;
}

const data = [
  { name: 'Marketing', estres: 40, motivacion: 24, fatiga: 10 },
  { name: 'Tecnología', estres: 30, motivacion: 13, fatiga: 40 },
  { name: 'Finanzas', estres: 20, motivacion: 50, fatiga: 5 },
  { name: 'RH', estres: 27, motivacion: 39, fatiga: 10 },
];

const pieData = [
  { name: 'Estable', value: 400 },
  { name: 'En Riesgo', value: 300 },
  { name: 'Critico', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const HIGH_CONTRAST_COLORS = ['#FFFFFF', '#AAAAAA', '#FFFF00', '#FF0000'];

export default function MonthlyReport({ isHighContrast }: Props) {
  const [filter, setFilter] = useState('Todos');
  const [aiInsight, setAiInsight] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  const handleDownload = () => {
    window.print();
  };

  const handleGenerateInsight = async () => {
    setLoadingAi(true);
    const context = `Datos del mes: Marketing (Estrés: 40%), Tecnología (Fatiga: 40%), Finanzas (Motivación alta). Estado general: 400 Estables, 100 Críticos.`;
    const result = await generateInsight(context);
    setAiInsight(result);
    setLoadingAi(false);
  };

  const currentColors = isHighContrast ? HIGH_CONTRAST_COLORS : COLORS;

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl font-bold">Reporte Mensual</h2>
        <div className="flex gap-2">
            <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className={`p-2 rounded border ${isHighContrast ? 'bg-black border-yellow-400' : 'bg-white border-gray-300'}`}
            >
                <option>Todos</option>
                <option>Tecnología</option>
                <option>Marketing</option>
                <option>Finanzas</option>
            </select>
            <button 
            onClick={handleDownload}
            className={`flex items-center gap-2 px-4 py-2 rounded font-bold
                ${isHighContrast ? 'bg-yellow-400 text-black' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
            <Download size={18} /> Descargar
            </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className={`p-6 rounded-xl shadow ${isHighContrast ? 'border border-yellow-400' : 'bg-white'}`}>
          <h3 className="text-xl font-bold mb-4">Estado Emocional por Área</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke={isHighContrast ? '#444' : '#ccc'} />
                <XAxis dataKey="name" stroke={isHighContrast ? '#fff' : '#666'} />
                <YAxis stroke={isHighContrast ? '#fff' : '#666'} />
                <Tooltip 
                    contentStyle={isHighContrast ? { backgroundColor: '#000', borderColor: '#FF0' } : undefined} 
                />
                <Legend />
                <Bar dataKey="estres" fill={isHighContrast ? '#FF0000' : '#8884d8'} name="Estrés" />
                <Bar dataKey="motivacion" fill={isHighContrast ? '#00FF00' : '#82ca9d'} name="Motivación" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={`p-6 rounded-xl shadow ${isHighContrast ? 'border border-yellow-400' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-4">Resumen General</h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={currentColors[index % currentColors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* AI Insight Section */}
      <div className={`p-6 rounded-xl shadow ${isHighContrast ? 'border border-yellow-400 bg-black' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100'}`}>
        <div className="flex items-center gap-2 mb-4">
            <Sparkles className={isHighContrast ? 'text-yellow-400' : 'text-indigo-600'} />
            <h3 className="text-xl font-bold">Análisis Inteligente (Gemini)</h3>
        </div>
        
        {!aiInsight && !loadingAi && (
            <button 
                onClick={handleGenerateInsight}
                className={`px-4 py-2 rounded font-bold transition-colors
                ${isHighContrast ? 'bg-white text-black hover:bg-gray-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            >
                Generar Análisis con IA
            </button>
        )}

        {loadingAi && <p className="animate-pulse">Analizando datos...</p>}

        {aiInsight && (
            <div className="mt-2 p-4 rounded bg-opacity-10 bg-gray-500">
                <p className="text-lg leading-relaxed">{aiInsight}</p>
            </div>
        )}
      </div>

      {/* Recognitions */}
      <div className={`p-6 rounded-xl shadow ${isHighContrast ? 'border border-yellow-400' : 'bg-white'}`}>
        <h3 className="text-xl font-bold mb-4">Reconocimientos del Mes</h3>
        <div className="grid sm:grid-cols-3 gap-4">
            <div className={`p-4 rounded border ${isHighContrast ? 'border-white' : 'bg-yellow-50 border-yellow-200'}`}>
                <p className="font-bold">Maria Rodriguez</p>
                <p className="text-sm opacity-80">Mayor mejora en bienestar</p>
            </div>
            <div className={`p-4 rounded border ${isHighContrast ? 'border-white' : 'bg-blue-50 border-blue-200'}`}>
                <p className="font-bold">Equipo de Tech</p>
                <p className="text-sm opacity-80">Compañerismo inclusivo</p>
            </div>
        </div>
      </div>
    </div>
  );
}
