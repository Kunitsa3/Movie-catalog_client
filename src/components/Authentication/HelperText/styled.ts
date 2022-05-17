import { Container, styled, Typography, TypographyTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export const HelperTextWrapper = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
});

export const ColoredText = styled(Typography)({
  color: '#1976d2',
  fontWeight: 600,
  cursor: 'pointer',
}) as OverridableComponent<TypographyTypeMap<{}, 'span'>>;
