
import React, { useState } from 'react';
import { Icons } from '../constants';

interface UsageHistoryViewProps {
  onBack: () => void;
}

interface Rental {
  id: string;
  date: string;
  duration: string;
  bikeId: string;
  station: string;
}

const MOCK_RENTALS: Rental[] = [
  { id: '1', date: '08-10-2025', duration: '15 minutos', bikeId: '#07', station: 'Estación 2: Rectorado' },
  { id: '2', date: '14-10-2025', duration: '30 minutos', bikeId: '#12', station: 'Estación 1: FCV' },
  { id: '3', date: '24-10-2025', duration: '45 minutos', bikeId: '#05', station: 'Estación 2: Rectorado' },
  { id: '4', date: '06-11-2025', duration: '20 minutos', bikeId: '#09', station: 'Estación 1: FCV' },
  { id: '5', date: '18-11-2025', duration: '15 minutos', bikeId: '#01', station: 'Estación 2: Rectorado' },
  { id: '6', date: '27-11-2025', duration: '30 minutos', bikeId: '#15', station: 'Estación 1: FCV' },
  { id: '7', date: '02-12-2025', duration: '60 minutos', bikeId: '#11', station: 'Estación 2: Rectorado' },
  { id: '8', date: '10-12-2025', duration: '15 minutos', bikeId: '#03', station: 'Estación 1: FCV' },
  { id: '9', date: '11-12-2025', duration: '45 minutos', bikeId: '#08', station: 'Estación 2: Rectorado' },
  { id: '10', date: '22-12-2025', duration: '15 minutos', bikeId: '#14', station: 'Estación 1: FCV' },
];

const UsageHistoryView: React.FC<UsageHistoryViewProps> = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [rentals] = useState<Rental[]>(MOCK_RENTALS);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (rentals.length === 0) {
    return (
      <div className="px-6 py-4 animate-in fade-in duration-300">
        <h2 className="text-xl font-bold text-center mb-10">Historial de Uso</h2>
        <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center">
          <p className="text-sm font-bold text-gray-300 mb-2">Aún no has realizado ninguna reserva.</p>
          <p className="text-sm font-bold text-gray-300">¡Explora el módulo y empieza a pedalear!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-4 animate-in slide-in-from-right duration-300">
      <h2 className="text-xl font-bold text-center mb-8">Historial de Uso</h2>

      <div className="space-y-3">
        {rentals.map((rental) => (
          <div key={rental.id} className="overflow-hidden">
            <button
              onClick={() => toggleExpand(rental.id)}
              className="w-full flex items-center justify-between gap-3 bg-gray-900/60 border border-gray-800 p-4 rounded-xl hover:bg-gray-800/80 transition-all active:scale-[0.98] group"
            >
              <div className="flex items-center gap-3">
                <div className="text-green-500 scale-110">
                   <Icons.FileText />
                </div>
                <span className="text-[15px] font-bold text-gray-200">
                  {rental.date}
                </span>
              </div>
              <div className="flex items-center">
                <div className={`text-gray-500 transition-transform duration-200 ${expandedId === rental.id ? 'rotate-180' : ''}`}>
                  <Icons.ChevronDown />
                </div>
              </div>
            </button>

            {expandedId === rental.id && (
              <div className="bg-gray-900/30 border-x border-b border-gray-800 -mt-2 pt-4 pb-5 px-6 rounded-b-xl space-y-3 animate-in slide-in-from-top-2 duration-200">
                <div className="flex items-center gap-3">
                  <div className="text-green-600 scale-75"><Icons.FileText /></div>
                  <span className="text-[13px] font-bold text-gray-300">{rental.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-600 scale-75"><Icons.Clock /></div>
                  <span className="text-[13px] font-bold text-gray-300">Duración de préstamo: {rental.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-600 scale-75"><Icons.Bike /></div>
                  <span className="text-[13px] font-bold text-gray-300">Bicicleta: {rental.bikeId}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-600 scale-75">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-300">{rental.station}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsageHistoryView;
