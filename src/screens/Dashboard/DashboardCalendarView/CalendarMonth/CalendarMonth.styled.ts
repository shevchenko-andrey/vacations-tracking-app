import { styled, Box } from '@mui/material';

export const CalendarGridWrapper = styled(Box)({
  backgroundColor: '#ccc',
  display: 'grid',
  gap: '1px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
});
