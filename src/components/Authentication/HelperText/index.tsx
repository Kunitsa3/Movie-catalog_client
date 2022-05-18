import { Typography } from '@mui/material';
import { FC } from 'react';
import { ColoredText, HelperTextWrapper } from './styled';

interface HelperTextProps {
  text: string;
  linkText: string;
  onClick: () => void;
}
const HelperText: FC<HelperTextProps> = ({ text, linkText, onClick }) => (
  <HelperTextWrapper>
    <Typography>
      {text}
      <ColoredText component="span" onClick={onClick}>
        {' '}
        {linkText}
      </ColoredText>
    </Typography>
  </HelperTextWrapper>
);

export default HelperText;
