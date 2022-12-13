import { FC } from 'react';
import { Dayjs } from 'dayjs';
import * as Styled from './CalendarDaysOfWeek.styled';
import { DateTimeFormat } from '../../../../models/dayjs.models';
import { createArrayOfDay } from '../../../../helpers/createArrayOfDay';

const AMOUNT_DAY_OF_WEEK = 7;

interface IDayOfWeekProps {
  startDayInstance: Dayjs;
}

export const CalendarDaysOfWeek: FC<IDayOfWeekProps> = ({
  startDayInstance,
}) => {
  const arrayDayOfWeek = createArrayOfDay(startDayInstance, AMOUNT_DAY_OF_WEEK);

  return (
    <Styled.CalendarGridWrapper>
      {arrayDayOfWeek.map(day => {
        return (
          <Styled.CalendarDayOfWeek key={day.unix()}>
            {day.format(DateTimeFormat.SHORT_DAY_OF_WEEK)}
          </Styled.CalendarDayOfWeek>
        );
      })}
    </Styled.CalendarGridWrapper>
  );
};
