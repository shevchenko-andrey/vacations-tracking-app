import { styled, Box } from '@mui/material';

export const CalendarDayOfWeek = styled(Box)({
  padding: '10px',
  color: '#fff',
  backgroundColor: '#774353',
  position: 'relative',
});

export const CalendarGridWrapper = styled(Box)({
  backgroundColor: '#ccc',
  display: 'grid',
  gap: '1px',
  gridTemplateColumns: 'repeat(7,1fr)',
  gridTemplateRows: '1fr',
});
