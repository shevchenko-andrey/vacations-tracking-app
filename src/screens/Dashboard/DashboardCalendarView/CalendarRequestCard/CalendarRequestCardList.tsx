import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { IRequestFullData } from '../../../../models/request.models';

interface IRequestCardProps {
  requestData: IRequestFullData;
}

export const CalendarRequestCard: FC<IRequestCardProps> = ({ requestData }) => {
  const { type } = requestData;

  return (
    <Box mt="10px">
      <Typography textAlign="center">
        {type.toLowerCase() || 'unknown type'}
      </Typography>
    </Box>
  );
};
