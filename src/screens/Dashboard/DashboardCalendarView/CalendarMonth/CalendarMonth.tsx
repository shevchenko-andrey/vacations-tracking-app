import { IRequestFullData } from '../../../../models/request.models';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { getRequestsForMonth } from '../../../../service/vacationsRequestService';
import dayjs, { Dayjs } from 'dayjs';
import * as Styled from './CalendarMonth.styled';
import { CalendarDay } from '../CalendarDay';

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

  const checkIsVacation = useCallback(
    (day: Dayjs) => {
      return requestData.some(({ endDate, startDate }) =>
        day.isBetween(dayjs(startDate).subtract(1, 'day'), endDate)
      );
    },
    [requestData]
  );

  const calendarDataList = useMemo(
    () =>
      arrayOfDay.map(day => ({
        isVacation: checkIsVacation(day),

        isSelectedDay: day.isSame(selectedDate, 'day'),

        requestData: requestData.find(({ endDate, startDate }) =>
          day.isBetween(dayjs(startDate).subtract(1, 'day'), endDate)
        ),

        day,
      })),

    [arrayOfDay, checkIsVacation, selectedDate, requestData]
  );

  return (
    <Styled.CalendarGridWrapper>
      {calendarDataList.map(
        ({ day, isVacation, requestData, isSelectedDay }) => (
          <CalendarDay
            key={day.unix()}
            isVacation={isVacation}
            isSelectedDay={isSelectedDay}
            requestData={requestData}
            day={day}
          />
        )
      )}
    </Styled.CalendarGridWrapper>
  );
};
