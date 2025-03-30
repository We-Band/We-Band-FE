import { useEffect } from 'react';
import LiteHeader from './header/LiteHeader';
import LiteCalendar from '@components/calendar/LiteCalendar';

const LiteHome: React.FC = () => {
  return (
    <>
      <LiteHeader />
      <LiteCalendar />
    </>
  );
};

export default LiteHome;
