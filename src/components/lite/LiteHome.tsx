import { ReactNode, useContext } from 'react';
import { createContext } from 'react';
import LiteHeader from './header/LiteHeader';
import LiteCalendar from '@components/calendar/LiteCalendar';
import * as S from './LiteHome.styled';
import { useState } from 'react';
import AlertUrlCopy from './alertUrlCopy/AlertUrlCopy';

interface LiteContextType {
  encodedSchedule: string;
  setEncodedSchedule: React.Dispatch<React.SetStateAction<string>>;
  selectedUser: string;
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
  alertCopyUrl: boolean;
  setAlertCopyUrl: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LiteContext = createContext<LiteContextType>({
  encodedSchedule: '',
  setEncodedSchedule: () => {},
  selectedUser: '',
  setSelectedUser: () => {},
  alertCopyUrl: false,
  setAlertCopyUrl: () => {},
});

export const useLiteContext = () => {
  const context = useContext(LiteContext);
  if (!context) {
    throw new Error('useLiteContext must be used within a LiteProvider');
  }
  return context;
};

const LiteProvider = ({ children }: { children: ReactNode }) => {
  const [encodedSchedule, setEncodedSchedule] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [alertCopyUrl, setAlertCopyUrl] = useState(false);

  return (
    <LiteContext.Provider
      value={{
        encodedSchedule,
        setEncodedSchedule,
        selectedUser,
        setSelectedUser,
        alertCopyUrl,
        setAlertCopyUrl,
      }}
    >
      {children}
    </LiteContext.Provider>
  );
};

const LiteHome = () => {
  const [userToggle, setUserToggle] = useState(false);
  const { alertCopyUrl } = useLiteContext();

  return (
    <S.LiteHomeContainer>
      <LiteProvider>
        {alertCopyUrl && <AlertUrlCopy />}
        <LiteHeader userToggle={userToggle} setUserToggle={setUserToggle} />
        <LiteCalendar userToggle={userToggle} />
      </LiteProvider>
    </S.LiteHomeContainer>
  );
};

export default LiteHome;
