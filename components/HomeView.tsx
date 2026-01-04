
import React from 'react';
import { AppScreen } from '../types';
import { Icons } from '../constants';

interface HomeViewProps {
  onNavigate: (screen: AppScreen) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-black">
      {/* Profile Section - Exactly like screenshot style */}
      <div className="flex flex-col items-center pt-2 pb-10 px-6">
        <div className="relative mb-6">
          <div className="w-48 h-48 flex items-center justify-center">
             {/* Silhouette exactly from screenshot */}
             <svg viewBox="0 0 24 24" className="w-full h-full text-[#777777]" fill="currentColor">
                <path d="M12 2C9.24 2 7 4.24 7 7c0 2.11 1.31 3.91 3.16 4.62C7.3 12.63 5 15.54 5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1 0-3.46-2.3-6.37-5.16-7.38C15.69 10.91 17 9.11 17 7c0-2.76-2.24-5-5-5zM12 4c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0 14H7.21c.42-2.12 2.13-3.79 4.29-3.98l.5.01c2.16.19 3.87 1.86 4.29 3.98H12z" />
             </svg>
          </div>
        </div>
        <p className="text-gray-500 text-lg font-medium mb-1">¡Buenos días!</p>
        <h1 className="text-white text-2xl font-bold tracking-wide uppercase">ANA VÁSQUEZ</h1>
      </div>

      {/* Grid Container Sheet - Dark Gray as in image */}
      <div className="flex-1 bg-[#1a1a1a] rounded-t-[32px] px-6 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] overflow-y-auto pb-24">
        {/* Drag handle */}
        <div className="w-14 h-1 bg-white/40 rounded-full mx-auto mb-8"></div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-6 mb-12">
          {/* Académico */}
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-lg group-active:scale-95 transition-transform">
               <div className="text-blue-500 scale-[1.8]"><Icons.GraduationCap /></div>
            </div>
            <span className="text-[11px] font-medium text-gray-400">Académico</span>
          </div>
          
          {/* Calendario */}
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-lg group-active:scale-95 transition-transform">
               <div className="text-lime-500 scale-[1.2]"><Icons.Calendar /></div>
            </div>
            <span className="text-[11px] font-medium text-gray-400">Calendario</span>
          </div>

          {/* Bienestar - Updated with vibrant purple to match the hand-heart image */}
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-lg group-active:scale-95 transition-transform">
               <div className="text-[#8e74ff] scale-[1.8]"><Icons.HandHeart /></div>
            </div>
            <span className="text-[11px] font-medium text-gray-400">Bienestar</span>
          </div>

          {/* Certificados */}
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-lg group-active:scale-95 transition-transform">
               <div className="text-blue-400 scale-[1.8]"><Icons.Seal /></div>
            </div>
            <span className="text-[11px] font-medium text-gray-400">Certificados</span>
          </div>

          {/* Restaurantes */}
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-lg group-active:scale-95 transition-transform">
               <div className="text-orange-500 scale-[1.8]"><Icons.ForkKnife /></div>
            </div>
            <span className="text-[11px] font-medium text-gray-400">Restaurantes</span>
          </div>

          {/* Rutas */}
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center border border-white/5 shadow-lg group-active:scale-95 transition-transform">
               <div className="text-yellow-500 scale-[1.8]"><Icons.Bus /></div>
            </div>
            <span className="text-[11px] font-medium text-gray-400">Rutas</span>
          </div>

          {/* BiciESPOL */}
          <div 
            onClick={() => onNavigate(AppScreen.BICI_ESPOL)}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            <div className="w-full aspect-square bg-black rounded-xl flex items-center justify-center border border-[#f4511e]/30 shadow-lg group-active:scale-95 transition-transform ring-1 ring-[#f4511e]/10">
               <div className="text-[#f4511e] scale-[1.8]"><Icons.Bike /></div>
            </div>
            <span className="text-[11px] font-bold text-[#f4511e]">BiciESPOL</span>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="mt-4 pt-6 border-t border-white/5">
          <div className="flex items-center gap-2 mb-6">
             <div className="text-gray-400 scale-75"><Icons.List /></div>
             <span className="text-white text-[13px] font-bold uppercase tracking-wider">Favoritos</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-24 h-24 bg-[#001f3f] rounded-[24px] flex items-center justify-center shadow-2xl cursor-pointer hover:bg-[#002b59] transition-colors active:scale-95 border border-white/5">
               <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
               </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
