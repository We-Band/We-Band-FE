import React, { useEffect, useRef } from 'react';
import * as S from './Dropdown.styled';

export interface DropdownOption {
  id: string;
  label: string;
  onClick: (e: React.MouseEvent) => void;
}

interface DropdownProps {
  options: DropdownOption[];
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부 클릭 감지를 위한 이벤트 핸들러
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // 전역 클릭 이벤트 리스너 등록
    document.addEventListener('mousedown', handleClickOutside);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <S.DropdownContainer ref={dropdownRef} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      {options.map((option) => (
        <S.DropdownItem 
          key={option.id}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            option.onClick(e);
            onClose();
          }}
        >
          {option.label}
        </S.DropdownItem>
      ))}
    </S.DropdownContainer>
  );
};

export default Dropdown; 