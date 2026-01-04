
import React from 'react';
import { Icons } from '../constants';

interface ActiveLoanViewProps {
  onFinalize: () => void;
}

const ActiveLoanView: React.FC<ActiveLoanViewProps> = ({ onFinalize }) => {
  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right duration-500">
      {/* Warning Banner */}
      <div className="mx-6 mt-4 bg-orange-500 text-black p-3 rounded-lg flex items-center gap-3">
        <div className="bg-white/20 p-1 rounded-md">
          <Icons.Warning />
        </div>
        <span className="text-[11px] font-black uppercase tracking-tight">¡El tiempo está por finalizar!</span>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 mt-12">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Tiempo Restante</span>
        <h3 className="text-5xl font-black text-red-500 mb-8 font-mono">1:43</h3>

        <div className="w-full h-1.5 bg-gray-800 rounded-full mb-12 relative overflow-hidden">
           <div className="absolute left-0 top-0 h-full w-[15%] bg-red-500 rounded-full"></div>
        </div>

        <p className="text-[11px] text-gray-400 text-center font-medium max-w-[200px] mb-8">Recuerda devolver tu bicicleta antes de que termine el tiempo</p>

        {/* Map Snippet Area */}
        <div className="w-full bg-gray-900/40 border border-gray-800 rounded-2xl p-4 flex gap-4">
           <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Abstract Map Mini */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-700 stroke-current fill-none opacity-40">
                <path d="M10,50 Q30,10 70,20 T90,50 L80,90 Q40,100 10,80 Z" strokeWidth="2" />
                <circle cx="35" cy="45" r="4" fill="#EF4444" />
              </svg>
           </div>
           <div className="flex-1 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase mb-1">Estación más cercana para la devolución</span>
              <span className="text-sm font-black text-white">Estación 2 - Rectorado</span>
           </div>
        </div>
      </div>

      <div className="px-6 mb-4">
        <button 
          onClick={onFinalize}
          className="w-full py-4 bg-gray-300 text-black font-black rounded-xl active:scale-95 transition-transform tracking-widest uppercase"
        >
          Finalizar Préstamo
        </button>
      </div>
    </div>
  );
};

export default ActiveLoanView;