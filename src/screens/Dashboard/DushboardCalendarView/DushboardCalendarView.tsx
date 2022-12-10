import { FC, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Moment } from 'moment';
import { MomentDateTimeFormat } from '../../../models/moment.models';
import { getRequestsForMonth } from '../../../service/vacationsRequestService';
import { IRequestFullData } from '../../../models/request.models';
import { CalendarRequestCardList } from './CalendarRequestCardList';

const AMOUNT_OF_DAY = 42;

interface CalendarViewProps {
  selectedDate: Moment;
}

export const DushBoardCalendarView: FC<CalendarViewProps> = ({
  selectedDate,
}) => {
  const [requestData, setRequestData] = useState<IRequestFullData[]>([]);
  useEffect(() => {
    const fetchVisibleRequests = async () => {
      const allRequestsForMonth = await getRequestsForMonth(selectedDate);
      setRequestData(allRequestsForMonth);
    };
    try {
      fetchVisibleRequests();
    } catch (error) {}
  }, [selectedDate]);

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
    <Box
      bgcolor="#ccc"
      display="grid"
      gap="1px"
      gridTemplateColumns={'repeat(7, 1fr)'}
      gridTemplateRows={'repeat(6, 1fr)'}
    >
      {arrayOfDay.map(day => (
        <Box
          p="10px"
          color="#fff"
          bgcolor="#837373"
          minHeight="200px"
          key={day.unix()}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            pt="10px"
          >
            <Box color={day.isSame(selectedDate, 'day') ? '#ff0000' : '#000'}>
              <Typography>{day.format(MomentDateTimeFormat.DAY)}</Typography>
            </Box>
            <Box
              width="100%"
              overflow="auto"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {requestData.length !== 0 && (
                <CalendarRequestCardList
                  requestData={requestData.filter(
                    ({ startDate, endDate }) =>
                      day.isSame(startDate, 'day') || day.isSame(endDate, 'day')
                  )}
                />
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
