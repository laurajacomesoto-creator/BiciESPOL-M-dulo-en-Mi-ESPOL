
import React from 'react';
import { AppScreen } from '../types';
import { Icons } from '../constants';

interface ReportHistoryViewProps {
  onNavigate: (screen: AppScreen) => void;
  onBack: () => void;
}

const ReportHistoryView: React.FC<ReportHistoryViewProps> = ({ onNavigate, onBack }) => {
  const reports = [
    { id: 1, date: "08-10-2025", icon: <Icons.Seat /> },
    { id: 2, date: "24-10-2025", icon: <Icons.Bike /> },
    { id: 3, date: "18-11-2025", icon: <Icons.FileText /> },
    { id: 4, date: "27-11-2025", icon: <Icons.Bike /> },
    { id: 5, date: "11-12-2025", icon: <Icons.Gear /> }
  ];

  return (
    <div className="px-8 py-4 animate-in slide-in-from-right duration-300 flex flex-col h-full">
      <h2 className="text-xl font-bold text-center mb-12">Historial de reportes</h2>

      <div className="flex-1 space-y-8 mb-10 overflow-y-auto">
        {reports.map((report) => (
          <div key={report.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-8">
              <div className="text-red-600 scale-[1.8] group-hover:scale-[2.0] transition-transform">
                {report.icon}
              </div>
              <span className="text-lg font-medium tracking-wide text-gray-200">{report.date}</span>
            </div>
            
            <button className="flex flex-col items-center gap-0.5 bg-red-600 rounded-md px-2 py-1 active:scale-90 transition-transform">
               <span className="text-[10px] font-black text-white leading-none">PDF</span>
               <div className="w-4 h-0.5 bg-white/40"></div>
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={() => onNavigate(AppScreen.HOME)}
        className="w-full py-4 bg-gray-300 text-black font-bold rounded-xl active:scale-95 transition-transform mt-auto"
      >
        Volver al Inicio
      </button>
    </div>
  );
};

export default ReportHistoryView;
