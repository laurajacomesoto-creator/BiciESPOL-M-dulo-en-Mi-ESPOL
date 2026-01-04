
import React from 'react';
import { AppScreen } from '../types';
import { Icons } from '../constants';

interface DurationViewProps {
  onSelectDuration: (duration: string) => void;
  onBack: () => void;
}

const DurationView: React.FC<DurationViewProps> = ({ onSelectDuration, onBack }) => {
  const durations = [
    { label: '15 min', value: '15 minutos' },
    { label: '30 min', value: '30 minutos' },
    { label: '45 min', value: '45 minutos' },
    { label: '60 min', value: '60 minutos' }
  ];

  return (
    <div className="px-8 py-4 animate-in slide-in-from-right duration-300">
      <h2 className="text-2xl font-bold text-center mb-12">Duración del Préstamo</h2>

      <div className="grid grid-cols-2 gap-5 mb-8">
        {durations.map((dur) => (
          <button 
            key={dur.label}
            onClick={() => onSelectDuration(dur.value)}
            className="flex flex-col items-center justify-center gap-3 py-8 bg-black border border-gray-700 rounded-2xl hover:border-blue-500 hover:bg-blue-900/10 transition-all active:scale-95 group"
          >
            <div className="text-gray-500 group-hover:text-blue-500 transition-colors">
              <Icons.Clock />
            </div>
            <span className="text-xl font-bold text-gray-200 group-hover:text-white">{dur.label}</span>
          </button>
        ))}
      </div>

      <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
        Préstamo máximo permitido: 60 minutos
      </p>
    </div>
  );
};

export default DurationView;