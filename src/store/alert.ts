import { create } from 'zustand/react';

export interface AlertStore {
  alert: boolean;
  alertMessage: string[];
  setAlert: (value: boolean) => void;
  setAlertMessage: (messages: string[]) => void;
}

const useAlertStore = create<AlertStore>((set) => ({
  alert: false,
  alertMessage: [],
  setAlert: (value) => set({ alert: value }),
  setAlertMessage: (messages) => set({ alertMessage: messages }),
}));

export default useAlertStore;
