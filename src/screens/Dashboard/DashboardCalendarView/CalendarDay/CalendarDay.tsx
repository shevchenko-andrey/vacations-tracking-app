import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Dayjs } from 'dayjs';
import * as Styled from './CalendarDay.styled';
import { DateTimeFormat } from '../../../../models/dayjs.models';
import { IRequestFullData } from '../../../../models/request.models';
import { CalendarRequestCard } from '../CalendarRequestCard';

export interface ICalendarDayProps {
  day: Dayjs;
  isSelectedDay: boolean;
  isVacation: boolean;
  requestData?: IRequestFullData;
}

export const CalendarDay: FC<ICalendarDayProps> = ({
  day,
  requestData,
  isSelectedDay,
  isVacation,
}) => {
  const navigate = useNavigate();
  return (
    <Styled.CalendarCell
      bgcolor={isVacation ? '#83851e' : '#837373'}
      onClick={() =>
        isVacation && requestData
          ? navigate(`/vacation/request/${requestData.id}`)
          : navigate('/vacation/request/ ')
      }
      key={day.unix()}
    >
      <Box color={isSelectedDay ? '#ff0000' : '#000'}>
        <Typography>{day.format(DateTimeFormat.DAY)}</Typography>
      </Box>
      <Box
        width="100%"
        overflow="auto"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {requestData && <CalendarRequestCard requestData={requestData} />}
      </Box>
    </Styled.CalendarCell>
  );
};
