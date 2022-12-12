import { IRequestFullData } from '../../../../models/request.models';
import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DateTimeFormat } from '../../../../models/dayjs.models';
import { getRequestsForMonth } from '../../../../service/vacationsRequestService';
import { CalendarRequestCardList } from '../CalendarRequestCardList';
import { Dayjs } from 'dayjs';
import * as Styled from './CalendarMonth.styled';

interface ICalendarMonthProps {
  arrayOfDay: Dayjs[];
  selectedDate: Dayjs;
}

export const CalendarMonth: FC<ICalendarMonthProps> = ({
  arrayOfDay,
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

  return (
    <Styled.CalendarGridWrapper>
      {arrayOfDay.map(day => {
        return (
          <Styled.CalendarDay key={day.unix()}>
            <Box color={day.isSame(selectedDate, 'day') ? '#ff0000' : '#000'}>
              <Typography>{day.format(DateTimeFormat.DAY)}</Typography>
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
          </Styled.CalendarDay>
        );
      })}
    </Styled.CalendarGridWrapper>
  );
};
