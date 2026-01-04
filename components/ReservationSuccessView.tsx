
import React from 'react';
import { Icons } from '../constants';

interface ReservationSuccessViewProps {
  onNavigate: () => void;
}

const ReservationSuccessView: React.FC<ReservationSuccessViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 animate-in zoom-in duration-500">
      <div className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center mb-10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">¡Reserva Exitosa!</h2>
      <p className="text-gray-300 text-center mb-8 max-w-[240px] leading-snug">Tu reserva ha sido completada exitosamente.</p>

      {/* Warning Banner inside the success screen */}
      <div className="w-full bg-orange-500/10 border border-orange-500/40 p-4 rounded-xl flex flex-col items-center gap-2 mb-20">
         <div className="text-orange-500 scale-125 mb-1">
           <Icons.Warning />
         </div>
         <p className="text-[11px] font-black text-orange-500 text-center uppercase leading-tight tracking-wide">
           Recuerda: Si no retiras tu bicicleta en <span className="underline">15 minutos</span>, la reserva se anulará automáticamente.
         </p>
      </div>

      <button 
        onClick={onNavigate}
        className="w-full py-4 bg-gray-300 text-black font-black rounded-xl active:scale-95 transition-transform mt-auto tracking-widest uppercase"
      >
        ¡Buen viaje!
      </button>
    </div>
  );
};

export default ReservationSuccessView;