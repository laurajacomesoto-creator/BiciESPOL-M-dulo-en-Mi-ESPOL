
import React from 'react';
import { AppScreen } from '../types';
import { Icons } from '../constants';

interface RulesVideosViewProps {
  onNavigate: (screen: AppScreen) => void;
  onBack: () => void;
}

const RulesVideosView: React.FC<RulesVideosViewProps> = ({ onNavigate, onBack }) => {
  const items = [
    { 
      id: 'instructivo', 
      label: 'Instructivo para uso de bicicletas', 
      isPdf: true,
      screen: AppScreen.INSTRUCTION_DETAIL
    },
    { 
      id: 'modulo', 
      label: 'Uso del módulo de BiciESPOL', 
      isPdf: false,
      hasArrow: true 
    },
    { 
      id: 'reserva', 
      label: 'Reglas de reserva', 
      isPdf: false,
      hasArrow: true 
    },
    { 
      id: 'devolucion', 
      label: 'Reglas de devolución', 
      isPdf: false,
      hasArrow: true 
    },
    { 
      id: 'solicitar', 
      label: '¿Cómo solicitar el préstamo de bicicletas?', 
      isPdf: false,
      hasArrow: true 
    },
  ];

  return (
    <div className="px-6 py-4 animate-in slide-in-from-right duration-300">
      <h2 className="text-xl font-bold text-center mb-8">Reglas y Videos</h2>

      <div className="space-y-3">
        {items.map((item) => (
          <button 
            key={item.id}
            onClick={() => item.screen && onNavigate(item.screen)}
            className="w-full flex items-center justify-between gap-3 bg-gray-900/60 border border-gray-800 p-4 rounded-xl hover:bg-gray-800/80 transition-all active:scale-[0.98] group"
          >
            <div className="flex items-center gap-3">
              {item.isPdf ? (
                <div className="bg-red-600 rounded p-0.5 flex flex-col items-center justify-center min-w-[32px] h-6">
                  <span className="text-[8px] font-black text-white leading-none">PDF</span>
                  <div className="w-4 h-0.5 bg-white/40 mt-0.5"></div>
                </div>
              ) : (
                <div className="text-lime-500 flex-shrink-0">
                  <Icons.PlayCircle />
                </div>
              )}
              <span className="text-[13px] font-bold text-gray-200 text-left leading-tight group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
            
            {item.hasArrow && (
              <div className="text-gray-600 flex-shrink-0">
                <Icons.ChevronDown />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RulesVideosView;
