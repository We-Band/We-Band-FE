import { useEffect } from 'react';
import * as S from './Alert.styled';

const Alert = ({
  messages,
  onClose,
}: {
  messages: Array<string>;
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Hide after 2 seconds (1s fade-in, 2s display, 1s fade-out)
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <S.AlertContainer>
      {messages.map((message, idx) => (
        <S.AlertText key={idx} $highlight={idx % 2 === 0}>
          {message}
        </S.AlertText>
      ))}
    </S.AlertContainer>
  );
};

export default Alert;
