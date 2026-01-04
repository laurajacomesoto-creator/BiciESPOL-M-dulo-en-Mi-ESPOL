
import React from 'react';
import { AppScreen, Station } from '../types';
import { Icons } from '../constants';

interface StationsViewProps {
  onSelectStation: (name: string, location: string) => void;
  onBack: () => void;
}

const StationsView: React.FC<StationsViewProps> = ({ onSelectStation, onBack }) => {
  return (
    <div className="px-6 py-4 animate-in slide-in-from-right duration-300 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-center mb-8">Estaciones Cercanas</h2>

      <div className="relative flex-1 min-h-[400px]">
        {/* Abstract Map Background matching the reference style */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg viewBox="0 0 300 400" className="w-full h-full text-gray-500 stroke-current fill-none">
             <path d="M40,120 Q60,50 140,70 T240,100 L260,280 Q180,380 80,320 Z" strokeWidth="1.5" />
             <path d="M140,70 L170,240" strokeDasharray="6 3" />
             <path d="M60,130 L250,260" strokeDasharray="6 3" className="text-purple-500" />
             <circle cx="95" cy="135" r="4" fill="white" />
             <circle cx="240" cy="275" r="4" fill="white" />
          </svg>
        </div>

        {/* Station Card 2 (Yellow) */}
        <div className="absolute top-10 right-0 w-48 p-4 bg-black border border-gray-800 rounded-2xl shadow-2xl">
           <div className="flex justify-between items-start mb-1">
             <h3 className="text-sm font-bold text-gray-300">Estación 2</h3>
           </div>
           <p className="text-[11px] text-gray-500 mb-2">(Rectorado)</p>
           <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-500"><Icons.Bike /></span>
              <span className="text-2xl font-black">45</span>
           </div>
           <button 
             onClick={() => onSelectStation('Estación 2', 'Rectorado')}
             className="w-full py-2.5 bg-yellow-500 text-black text-[11px] font-black rounded-lg hover:bg-yellow-400 transition-colors uppercase tracking-tight"
           >
             Seleccionar estación
           </button>
        </div>

        {/* Station Card 1 (Purple) */}
        <div className="absolute bottom-20 left-0 w-48 p-4 bg-black border border-gray-800 rounded-2xl shadow-2xl">
           <h3 className="text-sm font-bold text-gray-300">Estación 1</h3>
           <p className="text-[11px] text-gray-500 mb-2">(FCV)</p>
           <div className="flex items-center gap-2 mb-3">
              <span className="text-purple-500"><Icons.Bike /></span>
              <span className="text-2xl font-black">30</span>
           </div>
           <button 
             onClick={() => onSelectStation('Estación 1', 'FCV')}
             className="w-full py-2.5 bg-purple-600 text-white text-[11px] font-black rounded-lg hover:bg-purple-500 transition-colors uppercase tracking-tight"
           >
             Seleccionar estación
           </button>
        </div>
      </div>
    </div>
  );
};

export default StationsView;