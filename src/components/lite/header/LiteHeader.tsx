import * as S from './LiteHeader.styled';
import { CopyUrlLite } from '@icons/CopyUrl';
import { LiteUserAddIcon } from '@icons/AddIcon';
import { ArrowDownPickUser, ArrowUpPickUser } from '@icons/Arrows';
import { useEffect, useState } from 'react';
import { LiteEditSchedule, InputUserName } from '@icons/Input';
import Alert from '@components/alert/Alert';
import { useNavigate } from 'react-router-dom';
import { useLiteContext } from '@components/lite/LiteHome';
import UserTable from '../userTable/UserTable';
import { cannotUseSpecialChar, setSchedule, urlCopied } from '@constants/alert';

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
  const { encodedSchedule, selectedUser } = useLiteContext();
  const [toggleUserBox, setToggleUserBox] = useState(false);

  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(['']);

  const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setAlert(true);
        setAlertMessage(urlCopied);
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
  };

  const handleAddUser = () => {
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const safeUserName = userName.replace(reg, '');

    if (userName !== safeUserName) {
      setAlert(true);
      setAlertMessage(cannotUseSpecialChar);
      return;
    }

    // 현재 URL 가져오기
    const currentPath = window.location.pathname;
    const encodedUserName = encodeURIComponent(userName); // userName을 URL 인코딩

    // 기존 'encodedUserName-encodedSchedule' 패턴을 찾아 제거
    const updatedPath = currentPath.replace(
      new RegExp(`/${encodedUserName}-[^/]+`),
      '',
    );

    localStorage.setItem('alertCopyUrl', JSON.stringify(true));
    // 새로운 경로 생성 및 이동
    navigate(`${updatedPath}/${userName}-${encodedSchedule}`);
  };

  const handleToggle = () => {
    setUserToggle((prev) => !prev);
  };

  useEffect(() => {
    if (userToggle) {
      setAlert(true);
      setAlertMessage(setSchedule);
    }
  }, [userToggle]);

  useEffect(() => {
    setUserName(selectedUser);
  }, [selectedUser]);

  return (
    <S.LiteHeaderContainer>
      {alert && (
        <Alert messages={alertMessage} onClose={() => setAlert(false)} />
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
              <S.AddUserText>
                {selectedUser ? '일정 수정' : '인원 추가'}
              </S.AddUserText>

              {selectedUser ? <LiteEditSchedule /> : <LiteUserAddIcon />}
            </S.AddUserContainer>
            <S.PickUserContainer
              onClick={() => setToggleUserBox(!toggleUserBox)}
            >
              <S.PickUserText>
                {selectedUser == '' ? '전체 보기' : selectedUser}
              </S.PickUserText>
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
