import { FC } from 'react';
import { Moment } from 'moment';
import * as Styled from './CalendarDaysOfWeek.styled';
import { MomentDateTimeFormat } from '../../../../models/moment.models';

const AMOUNT_DAY_OF_WEEK = 7;

interface IDayOfWeekProps {
  startDayInstance: Moment;
}

export const CalendarDaysOfWeek: FC<IDayOfWeekProps> = ({
  startDayInstance,
}) => {
  const startDaysOfWeek = startDayInstance.clone();

  const arrayDayOfWeek = [...Array(AMOUNT_DAY_OF_WEEK)].map(() =>
    startDaysOfWeek.add(1, 'day').clone()
  );

  return (
    <Styled.CalendarGridWrapper>
      {arrayDayOfWeek.map(day => {
        return (
          <Styled.CalendarDayOfWeek key={day.unix()}>
            {day.format(MomentDateTimeFormat.SHORT_DAY_OF_WEEK)}
          </Styled.CalendarDayOfWeek>
        );
      })}
    </Styled.CalendarGridWrapper>
  );
};
