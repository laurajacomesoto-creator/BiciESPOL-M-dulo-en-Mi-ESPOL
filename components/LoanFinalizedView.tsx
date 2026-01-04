
import React from 'react';

interface LoanFinalizedViewProps {
  onReturnHome: () => void;
}

const LoanFinalizedView: React.FC<LoanFinalizedViewProps> = ({ onReturnHome }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-in zoom-in duration-500">
      <div className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center mb-10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">¡Gracias por usar BiciESPOL!</h2>
      <p className="text-gray-300 text-center mb-24 max-w-[240px] leading-snug">Tu préstamo ha sido finalizado exitosamente.</p>

      <button 
        onClick={onReturnHome}
        className="w-full py-4 bg-gray-300 text-black font-black rounded-xl active:scale-95 transition-transform mt-auto tracking-widest uppercase"
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default LoanFinalizedView;