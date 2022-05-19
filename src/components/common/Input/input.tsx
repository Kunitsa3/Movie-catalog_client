import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { FC, useState } from 'react';
import { InputWrapper } from './styled';

interface InputProps {
  value: string;
  name: string;
  label: string;
  isPassword: boolean;
  errorsMessage?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

const Input: FC<InputProps> = ({ value, onChange, isPassword, label, errorsMessage, onBlur, name }) => {
  const [visibility, setVisibility] = useState(false);
  const type = isPassword ? (visibility ? 'text' : 'password') : 'text';

  const handleClickShowPassword = () => {
    setVisibility(oldState => !oldState);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <InputWrapper variant="outlined">
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput
        id={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        endAdornment={
          isPassword ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {visibility ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : undefined
        }
        label={label}
      />
      <FormHelperText error={!!errorsMessage}>{errorsMessage}</FormHelperText>
    </InputWrapper>
  );
};

export default Input;
