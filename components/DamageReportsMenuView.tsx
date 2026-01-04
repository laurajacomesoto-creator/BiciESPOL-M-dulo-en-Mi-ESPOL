
import React from 'react';
import { AppScreen } from '../types';

interface DamageReportsMenuViewProps {
  onNavigate: (screen: AppScreen) => void;
  onBack: () => void;
}

const DamageReportsMenuView: React.FC<DamageReportsMenuViewProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="px-6 py-4 animate-in slide-in-from-right duration-300">
      <h2 className="text-xl font-bold text-center mb-10">Reportes de Daños</h2>

      <div className="space-y-4">
        <button 
          onClick={() => onNavigate(AppScreen.REPORT_DAMAGE_FORM)}
          className="w-full flex items-center gap-4 bg-gray-900/50 border border-gray-800 p-4 rounded-xl hover:bg-gray-800 transition-colors"
        >
          <div className="p-2 bg-green-500/20 text-green-500 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <span className="text-sm font-medium">Reportar daño</span>
        </button>

        <button 
          onClick={() => onNavigate(AppScreen.REPORT_HISTORY)}
          className="w-full flex items-center gap-4 bg-gray-900/50 border border-gray-800 p-4 rounded-xl hover:bg-gray-800 transition-colors"
        >
          <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          </div>
          <span className="text-sm font-medium">Historial de reportes</span>
        </button>
      </div>
    </div>
  );
};

export default DamageReportsMenuView;
