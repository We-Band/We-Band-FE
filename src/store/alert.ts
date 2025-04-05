import { create } from 'zustand/react';
import { shallow } from 'zustand/shallow';

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

export { shallow }; // 이걸 같이 export 해두면 깔끔함
export default useAlertStore;
