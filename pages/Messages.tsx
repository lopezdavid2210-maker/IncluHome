import React from 'react';
import { MOCK_MESSAGES } from '../constants';
import { MailOpen, User } from 'lucide-react';

interface Props {
  isHighContrast: boolean;
}

export default function Messages({ isHighContrast }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Mensajes Recibidos</h2>

      <div className="space-y-4">
        {MOCK_MESSAGES.map((msg) => (
            <div 
                key={msg.id} 
                className={`p-4 rounded-lg cursor-pointer transition-all
                ${isHighContrast 
                    ? 'border border-yellow-400 hover:bg-gray-900' 
                    : `bg-white shadow-sm hover:shadow-md border-l-4 ${msg.read ? 'border-gray-300' : 'border-blue-500'}`}`}
            >
                <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="font-bold">{msg.sender}</span>
                    </div>
                    <span className="text-sm opacity-70">{msg.date}</span>
                </div>
                <h4 className={`font-bold mb-1 ${!msg.read && !isHighContrast ? 'text-blue-700' : ''}`}>
                    {msg.subject}
                </h4>
                <p className="text-sm opacity-80 line-clamp-2">{msg.content}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
