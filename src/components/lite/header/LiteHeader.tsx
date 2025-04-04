import * as S from './LiteHeader.styled';
import { CopyUrlLite } from '@icons/CopyUrl';
import AddIcon from '@assets/icons/add.svg?react';
import { ArrowDownPickUser, ArrowUpPickUser } from '@icons/Arrows';
import { useContext, useEffect, useState } from 'react';
import { InputUserName } from '@icons/Input';
import Alert from '@components/alert/Alert';
import { useNavigate } from 'react-router-dom';
import { LiteContext } from '../LiteHome';
import UserTable from '../userTable/userTable';
import { BLANK } from '@constants/blank';

interface LiteHeaderProps {
  userToggle: boolean;
  setUserToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LiteHeader: React.FC<LiteHeaderProps> = ({
  userToggle,
  setUserToggle,
}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const { encodedSchedule } = useContext(LiteContext);
  const [toggleUserBox, setToggleUserBox] = useState(false);

  const [alertAddUser, setAlertAddUser] = useState(false);
  const [alertURLCopy, setAlertURLCopy] = useState(false);
  const [alertSelectTime, setAlertSelectTime] = useState(false);

  const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setAlertURLCopy(true);
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
  };

  const handleAddUser = () => {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const safeUserName = userName.replace(reg, '');

    if (userName !== safeUserName) {
      setAlertAddUser(true);
      return;
    }
    navigate(`${userName}-${encodedSchedule}`);
  };

  const handleToggle = () => {
    setUserToggle((prev) => !prev);
  };

  useEffect(() => {
    if (userToggle) {
      setAlertSelectTime(true);
    }
  }, [userToggle]);

  return (
    <S.LiteHeaderContainer>
      {alertURLCopy && (
        <Alert
          messages={['URL', '이 복사되었어요. 일정을 공유해 보세요.']}
          onClose={() => setAlertURLCopy(!alertURLCopy)}
        />
      )}
      {alertAddUser && (
        <Alert
          messages={[
            '',
            `이름에${BLANK}`,
            '특수문자',
            '는 사용할 수 없습니다.',
          ]}
          onClose={() => setAlertAddUser(!alertAddUser)}
        />
      )}
      {alertSelectTime && (
        <Alert
          messages={['', `가능한${BLANK}`, '시간대', '를 표시하세요']}
          onClose={() => setAlertSelectTime(!alertSelectTime)}
        />
      )}

      {userToggle ? (
        <>
          <S.UserNameInputContainer>
            <S.UserNameInput
              type=""
              placeholder="이름을 입력해 주세요."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {userName == '' ? <InputUserName /> : ''}
          </S.UserNameInputContainer>
          {userName == '' ? (
            <S.CancleButton onClick={() => setUserToggle((prev) => !prev)}>
              취소
            </S.CancleButton>
          ) : (
            <S.AddUserButton onClick={handleAddUser}>완료</S.AddUserButton>
          )}
        </>
      ) : (
        <>
          <CopyUrlLite onClick={handleCopy} />
          <S.UserContainer>
            <S.AddUserContainer onClick={handleToggle}>
              <S.AddUserText>인원 추가</S.AddUserText>
              <AddIcon />
            </S.AddUserContainer>
            <S.PickUserContainer
              onClick={() => setToggleUserBox(!toggleUserBox)}
            >
              <S.PickUserText>전체 보기</S.PickUserText>
              {toggleUserBox ? (
                <>
                  <UserTable />
                  <ArrowUpPickUser />
                </>
              ) : (
                <ArrowDownPickUser />
              )}
            </S.PickUserContainer>
          </S.UserContainer>
        </>
      )}
    </S.LiteHeaderContainer>
  );
};

export default LiteHeader;
