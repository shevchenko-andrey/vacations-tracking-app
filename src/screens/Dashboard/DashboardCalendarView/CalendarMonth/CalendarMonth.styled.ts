import { styled, Box } from '@mui/material';

export const CalendarDay = styled(Box)({
  padding: '10px',
  color: '#fff',
  backgroundColor: '#837373',
  minHeight: '200px',
  position: 'relative',
});

export const CalendarGridWrapper = styled(Box)({
  backgroundColor: '#ccc',
  display: 'grid',
  gap: '1px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
});
