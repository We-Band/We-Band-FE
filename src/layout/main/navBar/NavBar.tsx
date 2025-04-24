import { useState } from 'react';
import * as S from './NavBar.styled';
import * as I from '@icons/NavBar';

enum NavBarState {
  CALENDAR = 'CALENDAR',
  CLUB = 'CLUB',
  MY = 'MY',
}

const NavBar = () => {
  const [navBarState, setNavBarState] = useState(NavBarState.CALENDAR);

  return (
    <S.NavBarContainer>
      <button onClick={() => setNavBarState(NavBarState.CALENDAR)}>
        {navBarState === NavBarState.CALENDAR ? (
          <I.CalendarOnIcon />
        ) : (
          <I.CalendarOffIcon />
        )}
      </button>
      <button onClick={() => setNavBarState(NavBarState.CLUB)}>
        {navBarState === NavBarState.CLUB ? (
          <I.ClubOnIcon />
        ) : (
          <I.ClubOffIcon />
        )}
      </button>
      <button onClick={() => setNavBarState(NavBarState.MY)}>
        {navBarState === NavBarState.MY ? <I.MyOnIcon /> : <I.MyOffIcon />}
      </button>
    </S.NavBarContainer>
  );
};

export default NavBar;
