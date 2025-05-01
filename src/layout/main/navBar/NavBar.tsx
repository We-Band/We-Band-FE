import { useState } from 'react';
import * as S from './NavBar.styled';
import * as I from '@icons/NavBar';
import { useNavigate } from 'react-router-dom';
import BottomSheet from '../../../pages/Club/BottomSheet';

enum NavBarState {
  CALENDAR = 'CALENDAR',
  CLUB = 'CLUB',
  MY = 'MY',
}

const NavBar = () => {
  const [navBarState, setNavBarState] = useState(NavBarState.CALENDAR);
  const navigate = useNavigate();
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [previousState, setPreviousState] = useState(navBarState);

  const handleClick = (state: NavBarState) => {
    setNavBarState(state);
    if (state === NavBarState.CALENDAR) {
      setSheetOpen(false);
      navigate('/');
    }
    if (state === NavBarState.CLUB) {
      // navigate('/club');
      setPreviousState(navBarState);
      setSheetOpen(true);
    }
    if (state === NavBarState.MY) {
      setSheetOpen(false);
      navigate('/my');
    }
  };

  const handleCloseSheet = () => {
    setSheetOpen(false);
    setNavBarState(previousState);
    if (previousState === NavBarState.CALENDAR) {
      navigate('/');
    }
    if (previousState === NavBarState.MY) {
      navigate('/my');
    }
  };

  return (
    <>
    <S.NavBarContainer>
      <button onClick={() => handleClick(NavBarState.CALENDAR)}>
        {navBarState === NavBarState.CALENDAR ? (
          <I.CalendarOnIcon />
        ) : (
          <I.CalendarOffIcon />
        )}
      </button>
      <button onClick={() => handleClick(NavBarState.CLUB)}>
        {navBarState === NavBarState.CLUB ? (
          <I.ClubOnIcon />
        ) : (
          <I.ClubOffIcon />
        )}
      </button>
      <button onClick={() => handleClick(NavBarState.MY)}>
        {navBarState === NavBarState.MY ? <I.MyOnIcon /> : <I.MyOffIcon />}
      </button>
    </S.NavBarContainer>
    <BottomSheet isOpen={isSheetOpen} onClose={handleCloseSheet} />
    </>
  );
};

export default NavBar;
