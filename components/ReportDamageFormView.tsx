
import React, { useState } from 'react';
import { AppScreen } from '../types';

interface ReportDamageFormViewProps {
  onNavigate: (screen: AppScreen) => void;
  onBack: () => void;
}

const ReportDamageFormView: React.FC<ReportDamageFormViewProps> = ({ onNavigate, onBack }) => {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  
  const issues = [
    "Freno defectuoso",
    "Llanta pinchada",
    "Asiento suelto",
    "Pedal flojo",
    "Cadena floja",
    "Otros"
  ];

  const toggleIssue = (issue: string) => {
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter(i => i !== issue));
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  return (
    <div className="px-8 py-4 animate-in slide-in-from-right duration-300 flex flex-col h-full">
      <h2 className="text-xl font-bold text-center mb-8">Reportar daño</h2>

      <div className="flex-1 overflow-y-auto pb-10">
        <p className="text-xs font-bold text-gray-400 mb-4 uppercase">¿Qué daño encontraste?</p>
        
        <div className="space-y-3 mb-6">
          {issues.map((issue) => (
            <div key={issue} className="flex items-center gap-3">
              <button 
                onClick={() => toggleIssue(issue)}
                className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${selectedIssues.includes(issue) ? 'bg-blue-600 border-blue-600' : 'border-gray-600'}`}
              >
                {selectedIssues.includes(issue) && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                )}
              </button>
              <span className="text-sm text-gray-300 font-medium">{issue}</span>
            </div>
          ))}
          
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="Descripción adicional" 
              className="w-full bg-transparent border-b border-gray-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 placeholder-gray-600"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-gray-400 mb-4 uppercase">Fecha del incidente:</p>
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <button className="text-gray-500">&lt;</button>
              <span className="text-sm font-bold text-blue-500">Diciembre</span>
              <button className="text-gray-500">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-y-3 text-center">
              {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
                <span key={d} className="text-[10px] font-bold text-gray-600">{d}</span>
              ))}
              {[30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3].map((day, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium ${day === 11 && i > 5 ? 'bg-blue-600/30 border border-blue-600 text-white' : (i < 5 || i > 31 ? 'text-gray-700' : 'text-gray-400')}`}>
                    {day}
                  </div>
                  {day === 11 && i > 5 && <div className="w-1 h-1 rounded-full bg-blue-500 mt-1"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        <button 
          onClick={() => onNavigate(AppScreen.REPORT_SUCCESS)}
          className="flex-1 py-4 bg-gray-300 text-black font-bold rounded-xl active:scale-95 transition-transform"
        >
          Enviar reporte
        </button>
        <button 
          onClick={onBack}
          className="flex-1 py-4 bg-gray-300 text-black font-bold rounded-xl active:scale-95 transition-transform"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ReportDamageFormView;
