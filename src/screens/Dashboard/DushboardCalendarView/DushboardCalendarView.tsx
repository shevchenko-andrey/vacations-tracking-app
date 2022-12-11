import { FC } from 'react';
import { Box } from '@mui/material';
import { Moment } from 'moment';
import { CalendarMonth } from './CalendarMonth';
import { CalendarDaysOfWeek } from './CalendarDaysOfWeek';

const AMOUNT_OF_DAY = 42;

interface CalendarViewProps {
  selectedDate: Moment;
}

export const DushBoardCalendarView: FC<CalendarViewProps> = ({
  selectedDate,
}) => {
  const startDayInstance = selectedDate
    .clone()
    .startOf('month')
    .startOf('week')
    .clone()
    .subtract(1, 'day');

  const arrayOfDay = [...Array(AMOUNT_OF_DAY)].map(() =>
    startDayInstance.add(1, 'day').clone()
  );

  return (
    <Box>
      <CalendarDaysOfWeek startDayInstance={startDayInstance} />
      <CalendarMonth selectedDate={selectedDate} arrayOfDay={arrayOfDay} />
    </Box>
  );
};
