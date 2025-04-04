import LiteHome from '@components/lite/LiteHome';
import OnBoardingLite from '@components/lite/onBoarding/OnBoardingLite';
import { parsePathToDate } from '@utils/urlHandle';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Lite = () => {
  const path = window.location.pathname;
  const time = parsePathToDate(path);

  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      window.location.reload();
    }
  }, [location.pathname]);

  return <>{time == undefined ? <OnBoardingLite /> : <LiteHome />}</>;
};

export default Lite;
