
import React from 'react';
import { AppScreen } from '../types';

interface ReportSuccessViewProps {
  onNavigate: (screen: AppScreen) => void;
  onBack: () => void;
}

const ReportSuccessView: React.FC<ReportSuccessViewProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-in zoom-in duration-300">
      <div className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center mb-8">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-24 max-w-[200px] leading-tight">¡Reporte enviado con éxito!</h2>

      <button 
        onClick={() => onNavigate(AppScreen.HOME)}
        className="w-full py-4 bg-gray-300 text-black font-bold rounded-xl active:scale-95 transition-transform mt-auto"
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default ReportSuccessView;
