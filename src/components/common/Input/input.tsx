import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { FC, useState } from 'react';
import { InputWrapper } from './styled';

interface InputProps {
  value: string;
  label: string;
  isPassword: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ value, onChange, isPassword, label }) => {
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
        value={value}
        onChange={onChange}
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
    </InputWrapper>
  );
};

export default Input;
