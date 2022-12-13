import { FC } from 'react';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import { CalendarMonth } from './CalendarMonth';
import { CalendarDaysOfWeek } from './CalendarDaysOfWeek';
import { createArrayOfDay } from '../../../helpers/createArrayOfDay';

interface CalendarViewProps {
  selectedDate: Dayjs;
}

const AMOUNT_OF_DAY_IN_CALENDAR = 42;

export const DashBoardCalendarView: FC<CalendarViewProps> = ({
  selectedDate,
}) => {
  const startDayInstance = selectedDate.startOf('month').startOf('week');

  const arrayOfDay = createArrayOfDay(
    startDayInstance,
    AMOUNT_OF_DAY_IN_CALENDAR
  );

  return (
    <Box>
      <CalendarDaysOfWeek startDayInstance={startDayInstance} />
      <CalendarMonth selectedDate={selectedDate} arrayOfDay={arrayOfDay} />
    </Box>
  );
};
