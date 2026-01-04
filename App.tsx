
import React, { useState, useEffect } from 'react';
import { AppScreen } from './types';
import HomeView from './components/HomeView';
import BiciEspolView from './components/BiciEspolView';
import StationsView from './components/StationsView';
import DurationView from './components/DurationView';
import ReservationConfirmationView from './components/ReservationConfirmationView';
import ReservationSuccessView from './components/ReservationSuccessView';
import ActiveLoanView from './components/ActiveLoanView';
import AddEvidenceView from './components/AddEvidenceView';
import LoanFinalizedView from './components/LoanFinalizedView';
import DamageReportsMenuView from './components/DamageReportsMenuView';
import ReportDamageFormView from './components/ReportDamageFormView';
import ReportSuccessView from './components/ReportSuccessView';
import ReportHistoryView from './components/ReportHistoryView';
import RulesVideosView from './components/RulesVideosView';
import InstructionDetailView from './components/InstructionDetailView';
import UsageHistoryView from './components/UsageHistoryView';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME);
  const [history, setHistory] = useState<AppScreen[]>([AppScreen.HOME]);
  
  // Shared state for reservation flow
  const [reservationData, setReservationData] = useState({
    stationName: '',
    stationLocation: '',
    duration: '',
    bikeNumber: ''
  });

  const navigateTo = (screen: AppScreen) => {
    setHistory([...history, screen]);
    setCurrentScreen(screen);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.HOME:
        return <HomeView onNavigate={navigateTo} />;
      case AppScreen.BICI_ESPOL:
        return <BiciEspolView onNavigate={navigateTo} onBack={goBack} />;
      case AppScreen.STATIONS:
        return (
          <StationsView 
            onSelectStation={(name, location) => {
              setReservationData(prev => ({ ...prev, stationName: name, stationLocation: location }));
              navigateTo(AppScreen.DURATION);
            }} 
            onBack={goBack} 
          />
        );
      case AppScreen.DURATION:
        return (
          <DurationView 
            onSelectDuration={(duration) => {
              setReservationData(prev => ({ ...prev, duration }));
              navigateTo(AppScreen.RESERVATION_CONFIRM);
            }} 
            onBack={goBack} 
          />
        );
      case AppScreen.RESERVATION_CONFIRM:
        return (
          <ReservationConfirmationView 
            data={reservationData}
            onUpdateBike={(num) => setReservationData(prev => ({ ...prev, bikeNumber: num }))}
            onConfirm={() => {
              // Trigger the detailed flow if bike number is 07 as per example
              navigateTo(AppScreen.RESERVATION_SUCCESS);
            }}
            onBack={goBack}
          />
        );
      case AppScreen.RESERVATION_SUCCESS:
        return <ReservationSuccessView onNavigate={() => navigateTo(AppScreen.ACTIVE_LOAN)} />;
      case AppScreen.ACTIVE_LOAN:
        return <ActiveLoanView onFinalize={() => navigateTo(AppScreen.ADD_EVIDENCE)} />;
      case AppScreen.ADD_EVIDENCE:
        return <AddEvidenceView onSave={() => navigateTo(AppScreen.LOAN_FINALIZED)} />;
      case AppScreen.LOAN_FINALIZED:
        return <LoanFinalizedView onReturnHome={() => navigateTo(AppScreen.HOME)} />;
      case AppScreen.DAMAGE_REPORTS_MENU:
        return <DamageReportsMenuView onNavigate={navigateTo} onBack={goBack} />;
      case AppScreen.REPORT_DAMAGE_FORM:
        return <ReportDamageFormView onNavigate={navigateTo} onBack={goBack} />;
      case AppScreen.REPORT_SUCCESS:
        return <ReportSuccessView onNavigate={navigateTo} onBack={goBack} />;
      case AppScreen.REPORT_HISTORY:
        return <ReportHistoryView onNavigate={navigateTo} onBack={goBack} />;
      case AppScreen.RULES_VIDEOS:
        return <RulesVideosView onNavigate={navigateTo} onBack={goBack} />;
      case AppScreen.INSTRUCTION_DETAIL:
        return <InstructionDetailView onBack={goBack} />;
      case AppScreen.USAGE_HISTORY:
        return <UsageHistoryView onBack={goBack} />;
      default:
        return <HomeView onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden max-w-md mx-auto relative border-x border-gray-800 shadow-2xl">
      <TopBar screen={currentScreen} onBack={goBack} />
      
      <main className="flex-1 overflow-y-auto pb-24">
        {renderScreen()}
      </main>

      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
};

export default App;