import { ReactNode } from 'react';
import { createContext } from 'react';
import LiteHeader from './header/LiteHeader';
import LiteCalendar from '@components/calendar/LiteCalendar';
import * as S from './LiteHome.styled';
import { useState } from 'react';

export const LiteContext = createContext<{
  encodedSchedule: string;
  setEncodedSchedule: React.Dispatch<React.SetStateAction<string>>;
  selectedUser: string;
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
}>({
  encodedSchedule: '',
  setEncodedSchedule: () => {},
  selectedUser: '',
  setSelectedUser: () => {},
});

const LiteProvider = ({ children }: { children: ReactNode }) => {
  const [encodedSchedule, setEncodedSchedule] = useState('');

  return (
    <LiteContext.Provider
      value={{
        encodedSchedule,
        setEncodedSchedule,
        selectedUser: '',
        setSelectedUser: () => {},
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
