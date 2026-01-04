
import React from 'react';
import { Icons } from '../constants';
import { AppScreen } from '../types';

interface BottomNavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-black flex justify-around items-center py-4 px-4 safe-area-bottom z-50">
      <button 
        onClick={() => onNavigate(AppScreen.HOME)}
        className="flex flex-col items-center justify-center transition-all"
      >
        <div className={`px-6 py-2.5 rounded-full transition-all flex items-center justify-center ${currentScreen === AppScreen.HOME ? 'bg-[#222222] text-white' : 'text-gray-600'}`}>
          <Icons.Home />
        </div>
      </button>
      
      <button className="flex flex-col items-center p-3 text-gray-500 hover:text-white transition-colors">
        <Icons.Siren />
      </button>
      
      <button className="flex flex-col items-center p-3 text-gray-500 hover:text-white transition-colors">
        <Icons.QR />
      </button>
      
      <button className="flex flex-col items-center p-2 text-gray-500 hover:text-white transition-colors">
        <div className="w-9 h-9 border border-gray-800 rounded-full flex items-center justify-center bg-[#111111] overflow-hidden">
          <div className="scale-75 text-gray-500">
            <Icons.User />
          </div>
        </div>
      </button>
    </nav>
  );
};

export default BottomNav;
