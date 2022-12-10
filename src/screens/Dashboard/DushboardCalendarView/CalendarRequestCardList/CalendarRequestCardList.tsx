import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { IRequestFullData } from '../../../../models/request.models';

interface IRequestCardListProps {
  requestData: IRequestFullData[];
}

export const CalendarRequestCardList: FC<IRequestCardListProps> = ({
  requestData,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {requestData.length !== 0 &&
        requestData.map(({ id, type }) => (
          <Box
            onClick={() => navigate(`/vacation/request/${id}`)}
            key={id}
            mt="10px"
            sx={{ cursor: 'pointer' }}
          >
            <Typography>{type}</Typography>
          </Box>
        ))}
    </>
  );
};
