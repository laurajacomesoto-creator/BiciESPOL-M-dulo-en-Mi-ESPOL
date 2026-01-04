
// Fix: Import React to resolve 'React.ReactNode' namespace error
import React from 'react';

export enum AppScreen {
  HOME = 'home',
  BICI_ESPOL = 'bici_espol',
  STATIONS = 'stations',
  DURATION = 'duration',
  RESERVATION_CONFIRM = 'reservation_confirm',
  RESERVATION_SUCCESS = 'reservation_success',
  ACTIVE_LOAN = 'active_loan',
  ADD_EVIDENCE = 'add_evidence',
  LOAN_FINALIZED = 'loan_finalized',
  DAMAGE_REPORTS_MENU = 'damage_reports_menu',
  REPORT_DAMAGE_FORM = 'report_damage_form',
  REPORT_SUCCESS = 'report_success',
  REPORT_HISTORY = 'report_history',
  RULES_VIDEOS = 'rules_videos',
  INSTRUCTION_DETAIL = 'instruction_detail',
  USAGE_HISTORY = 'usage_history'
}

export interface Station {
  id: string;
  name: string;
  location: string;
  bikesAvailable: number;
  color: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  screen?: AppScreen;
}