import { Typography } from '@mui/material';
import { FC } from 'react';
import { ColoredText, HelperTextWrapper } from './styled';

interface HelperTextProps {
  text: string;
  linkText: string;
}
const HelperText: FC<HelperTextProps> = ({ text, linkText }) => (
  <HelperTextWrapper>
    <Typography>
      {text}
      <ColoredText component="span"> {linkText}</ColoredText>
    </Typography>
  </HelperTextWrapper>
);

export default HelperText;
