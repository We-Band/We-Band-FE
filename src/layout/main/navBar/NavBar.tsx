import { useState } from 'react';
import * as S from './NavBar.styled';
import * as I from '@icons/NavBar';
import { useNavigate } from 'react-router-dom';

enum NavBarState {
  CALENDAR = 'CALENDAR',
  CLUB = 'CLUB',
  MY = 'MY',
}

const NavBar = () => {
  const [navBarState, setNavBarState] = useState(NavBarState.CALENDAR);
  const navigate = useNavigate();

  const handleClick = (state: NavBarState) => {
    setNavBarState(state);
    if (state === NavBarState.CALENDAR) {
      navigate('/');
    }
    if (state === NavBarState.CLUB) {
      navigate('/club');
    }
    if (state === NavBarState.MY) {
      navigate('/my');
    }
  };

  return (
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
  );
};

export default NavBar;
