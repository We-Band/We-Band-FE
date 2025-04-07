import * as S from './LiteHeader.styled';
import { CopyUrlLite } from '@icons/CopyUrl';
import { LiteUserAddIcon } from '@icons/AddIcon';
import { LiteTrash } from '@icons/Trash';
import { ArrowDownPickUser, ArrowUpPickUser } from '@icons/Arrows';
import { useEffect, useState } from 'react';
import { LiteEditSchedule, InputUserName } from '@icons/Input';

import { useNavigate } from 'react-router-dom';
import { useLiteContext } from '@components/lite/LiteHome';
import UserTable from '../userTable/UserTable';
import { CANNOTUSESPECIALCHAR, SETSCHEDULE, URLCOPIED } from '@constants/alert';
import AlertUrlCopy from '../alertUrlCopy/AlertUrlCopy';
import useAlertStore from '@store/alert';
import { getShortUrl } from '@api/shortUrl';

interface LiteHeaderProps {
  userToggle: boolean;
  setUserToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const LiteHeader: React.FC<LiteHeaderProps> = ({
  userToggle,
  setUserToggle,
}) => {
  const currentUrl = decodeURI(window.location.href);
  const [url, setUrl] = useState(currentUrl);

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const { encodedSchedule, selectedUser } = useLiteContext();
  const [toggleUserBox, setToggleUserBox] = useState(false);
  const [modalCopyUrl, setAlertCopyUrl] = useState(false);

  const setAlert = useAlertStore((state) => state.setAlert);
  const setAlertMessage = useAlertStore((state) => state.setAlertMessage);

  const handleCopy = () => {
    getShortUrl(currentUrl)
      .then((res) => {
        const shortUrl = res.result; // 단축된 URL

        navigator.clipboard
          .writeText(shortUrl)
          .then(() => {
            setAlert(true);
            setAlertMessage(URLCOPIED);
            console.log('단축된 URL 복사 완료:', shortUrl);
          })
          .catch((err) => {
            console.error('클립보드 복사 에러:', err);
          });
      })
      .catch((err) => {
        console.error('URL 단축 에러:', err);
      });
  };

  const handleAddUser = () => {
    const reg = /[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const safeUserName = userName.replace(reg, '');

    if (userName !== safeUserName) {
      setAlert(true);
      setAlertMessage(CANNOTUSESPECIALCHAR);
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

    const resultPath = decodeURI(
      `${updatedPath}/${userName}-${encodedSchedule}`,
    );

    setUrl(resultPath);
    setAlertCopyUrl(true);
    // 새로운 경로 생성 및 이동
    // navigate();
  };

  const handleDeleteUser = () => {
    // 현재 URL 가져오기
    const currentPath = window.location.pathname;
    const encodedUserName = encodeURIComponent(userName); // userName을 URL 인코딩

    // 기존 'encodedUserName-encodedSchedule' 패턴을 찾아 제거
    const updatedPath = currentPath.replace(
      new RegExp(`/${encodedUserName}-[^/]+`),
      '',
    );

    // 새로운 경로 생성 및 이동
    navigate(`${updatedPath}`);
  };

  const handleToggle = () => {
    setUserToggle((prev) => !prev);
  };

  useEffect(() => {
    if (userToggle) {
      setAlert(true);
      setAlertMessage(SETSCHEDULE);
    }
  }, [userToggle]);

  useEffect(() => {
    setUserName(selectedUser);
  }, [selectedUser]);

  return (
    <S.LiteHeaderContainer>
      {modalCopyUrl && <AlertUrlCopy url={url} />}
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
          {selectedUser ? (
            <LiteTrash onClick={handleDeleteUser} />
          ) : (
            <CopyUrlLite onClick={handleCopy} />
          )}
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
