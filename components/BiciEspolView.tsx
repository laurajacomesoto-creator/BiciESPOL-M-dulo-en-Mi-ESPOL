
import React from 'react';
import { AppScreen } from '../types';
import { Icons } from '../constants';

interface BiciEspolViewProps {
  onNavigate: (screen: AppScreen) => void;
  onBack: () => void;
}

const BiciEspolView: React.FC<BiciEspolViewProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="px-10 py-4 animate-in slide-in-from-right duration-300">
      <h2 className="text-2xl font-bold text-center mb-16 tracking-tight">BiciESPOL</h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10">
        <button 
          onClick={() => onNavigate(AppScreen.DAMAGE_REPORTS_MENU)}
          className="flex flex-col items-center justify-center gap-4 bg-black border border-gray-800 w-full aspect-square rounded-[24px] transition-all hover:bg-gray-900 active:scale-95 group shadow-lg"
        >
           <div className="text-yellow-400 scale-[2.2] mb-3 group-hover:scale-[2.0] transition-transform">
             <Icons.Warning />
           </div>
           <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-tight text-gray-300">Reportes</span>
            <span className="text-[13px] font-bold tracking-tight text-gray-300">de Daños</span>
           </div>
        </button>

        <button 
          onClick={() => onNavigate(AppScreen.RULES_VIDEOS)}
          className="flex flex-col items-center justify-center gap-4 bg-black border border-gray-800 w-full aspect-square rounded-[24px] transition-all hover:bg-gray-900 active:scale-95 group shadow-lg"
        >
           <div className="text-orange-600 scale-[2.2] mb-3 group-hover:scale-[2.0] transition-transform">
             <Icons.Video />
           </div>
           <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-tight text-gray-300">Reglas y</span>
            <span className="text-[13px] font-bold tracking-tight text-gray-300">Videos</span>
           </div>
        </button>

        <button 
          onClick={() => onNavigate(AppScreen.USAGE_HISTORY)}
          className="flex flex-col items-center justify-center gap-4 bg-black border border-gray-800 w-full aspect-square rounded-[24px] transition-all hover:bg-gray-900 active:scale-95 group shadow-lg"
        >
           <div className="text-cyan-400 scale-[2.2] mb-3 group-hover:scale-[2.0] transition-transform">
             <Icons.List />
           </div>
           <div className="flex flex-col">
            <span className="text-[13px] font-bold tracking-tight text-gray-300">Historial</span>
            <span className="text-[13px] font-bold tracking-tight text-gray-300">de Uso</span>
           </div>
        </button>

        <button 
          onClick={() => onNavigate(AppScreen.STATIONS)}
          className="flex flex-col items-center justify-center gap-4 bg-black border border-gray-800 w-full aspect-square rounded-[24px] transition-all hover:bg-gray-900 active:scale-95 group shadow-lg"
        >
           <div className="text-purple-600 scale-[2.2] mb-3 group-hover:scale-[2.0] transition-transform">
             <Icons.CheckCircle />
           </div>
           <span className="text-[13px] font-bold tracking-tight text-gray-300">Reservar</span>
        </button>
      </div>
    </div>
  );
};

export default BiciEspolView;