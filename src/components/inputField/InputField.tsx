import React, { useState } from 'react';
import * as S from './InputField.styled';

interface InputFieldProps {
  width?: string;
  defaultValue?: string;
  placeholder?: string;
  showPenIcon?: boolean;
  onChange?: (value: string) => void;
}

function InputField({
  width = '100%',
  defaultValue = '',
  placeholder = '',
  showPenIcon = false,
  onChange
}: InputFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const hasValue = value.trim().length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <S.InputContainer width={width} hasValue={hasValue}>
      <S.Input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {showPenIcon && !hasValue && <S.PenIcon />}
    </S.InputContainer>
  );
}

export default InputField;
