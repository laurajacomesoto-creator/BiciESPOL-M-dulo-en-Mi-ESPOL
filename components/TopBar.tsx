
import React from 'react';
import { Icons } from '../constants';
import { AppScreen } from '../types';

interface TopBarProps {
  screen: AppScreen;
  onBack: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ screen, onBack }) => {
  const showBack = screen !== AppScreen.HOME;

  return (
    <div className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-black text-white h-20">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={onBack} className="hover:opacity-70 transition-opacity mr-2">
            <Icons.ArrowLeft />
          </button>
        )}
        <div className="flex flex-col items-start leading-none">
          <span className="text-[12px] font-bold tracking-tight text-white mb-[-4px]">mi</span>
          <div className="flex items-baseline">
            <span className="text-[28px] font-bold tracking-tighter text-white lowercase" style={{ fontFamily: 'sans-serif' }}>espol</span>
            <span className="text-white text-[8px] ml-0.5 align-top">®</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 items-center">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Icons.Iris />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Icons.Bell />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
