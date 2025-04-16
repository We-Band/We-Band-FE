import { ReactNode, useContext, useEffect } from 'react';
import { createContext } from 'react';
import LiteHeader from './header/LiteHeader';
import LiteCalendar from '@components/calendar/LiteCalendar';
import * as S from './LiteHome.styled';
import { useState } from 'react';

interface LiteContextType {
  encodedSchedule: string;
  setEncodedSchedule: React.Dispatch<React.SetStateAction<string>>;
  selectedUser: string;
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
}

export const LiteContext = createContext<LiteContextType>({
  encodedSchedule: '가',
  setEncodedSchedule: () => {},
  selectedUser: '',
  setSelectedUser: () => {},
});

export const useLiteContext = () => {
  const context = useContext(LiteContext);
  if (!context) {
    throw new Error('useLiteContext must be used within a LiteProvider');
  }
  return context;
};

const LiteProvider = ({ children }: { children: ReactNode }) => {
  const [encodedSchedule, setEncodedSchedule] = useState('가');
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <LiteContext.Provider
      value={{
        encodedSchedule,
        setEncodedSchedule,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </LiteContext.Provider>
  );
};

const LiteHome = () => {
  const [userToggle, setUserToggle] = useState(false);

  return (
    <S.LiteHomeContainer>
      <LiteProvider>
        <LiteHeader userToggle={userToggle} setUserToggle={setUserToggle} />
        <LiteCalendar userToggle={userToggle} />
      </LiteProvider>
    </S.LiteHomeContainer>
  );
};

export default LiteHome;
