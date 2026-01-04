
import React from 'react';
import { AppScreen } from '../types';

interface ReservationConfirmationViewProps {
  data: {
    stationName: string;
    stationLocation: string;
    duration: string;
    bikeNumber: string;
  };
  onUpdateBike: (num: string) => void;
  onConfirm: () => void;
  onBack: () => void;
}

const ReservationConfirmationView: React.FC<ReservationConfirmationViewProps> = ({ data, onUpdateBike, onConfirm, onBack }) => {
  return (
    <div className="px-8 py-4 animate-in slide-in-from-right duration-300 flex flex-col h-full">
      <h2 className="text-2xl font-bold text-center mb-12">Confirmación de Reserva</h2>

      <div className="space-y-4 mb-10">
        <div className="flex items-center justify-between p-4 bg-gray-900/40 border border-gray-800 rounded-xl">
          <span className="text-sm font-bold text-gray-400">{data.stationName}</span>
          <span className="text-sm font-black text-white">{data.stationLocation}</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-900/40 border border-gray-800 rounded-xl">
          <span className="text-sm font-bold text-gray-400">Duración:</span>
          <span className="text-sm font-black text-white">{data.duration}</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-900/40 border border-gray-800 rounded-xl">
          <span className="text-sm font-bold text-gray-400">Bicicleta:</span>
          <div className="flex items-center gap-1">
             <span className="text-sm font-black text-white">#</span>
             <input 
               type="text" 
               placeholder="00" 
               value={data.bikeNumber}
               onChange={(e) => onUpdateBike(e.target.value)}
               className="w-10 bg-transparent text-right font-black text-sm focus:outline-none border-b border-gray-700 placeholder-gray-800"
             />
          </div>
        </div>
      </div>

      <button 
        onClick={onConfirm}
        disabled={!data.bikeNumber}
        className={`mt-auto w-full py-4 font-black rounded-xl transition-all active:scale-95 shadow-lg tracking-widest ${data.bikeNumber ? 'bg-gray-300 text-black' : 'bg-gray-800 text-gray-600 cursor-not-allowed'}`}
      >
        CONFIRMAR RESERVA
      </button>
    </div>
  );
};

export default ReservationConfirmationView;