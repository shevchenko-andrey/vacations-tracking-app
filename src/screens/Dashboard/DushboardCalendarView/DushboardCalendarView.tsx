import { Box, Typography } from '@mui/material';
import moment, { Moment } from 'moment';
import { MomentDateTimeFormat } from '../../../models/moment.models';

const AMOUNT_OF_DAY = 42;

export const DushBoardCalendarView = () => {
  const selectedDay: Moment = moment();
  const startDayInstance = selectedDay
    .clone()
    .startOf('month')
    .startOf('week')
    .clone()
    .subtract(1, 'day');

  const arrayOfDay = [...Array(AMOUNT_OF_DAY)].map(() =>
    startDayInstance.add(1, 'day').clone()
  );

  return (
    <Box
      bgcolor="#ccc"
      display="grid"
      gap="1px"
      gridTemplateColumns={'repeat(7, 1fr)'}
      gridTemplateRows={'repeat(6, 1fr)'}
    >
      {arrayOfDay.map(day => (
        <Box color="#fff" bgcolor="#837373" minHeight="80px" key={day.unix()}>
          <Box display="flex" justifyContent="flex-end">
            <Box
              color={day.isSame(selectedDay, 'day') ? '#ff0000' : '#000'}
              pt="10px"
              pr="10px"
            >
              <Typography>{day.format(MomentDateTimeFormat.DAY)}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
