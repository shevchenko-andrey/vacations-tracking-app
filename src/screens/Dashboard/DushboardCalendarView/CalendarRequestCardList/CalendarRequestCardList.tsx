import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { IRequestFullData } from '../../../../models/request.models';
import { Link } from 'react-router-dom';

interface IRequestCardListProps {
  requestData: IRequestFullData[];
}

export const CalendarRequestCardList: FC<IRequestCardListProps> = ({
  requestData,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {requestData.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            cursor: 'pointer',
            opacity: 0,
            ':hover': {
              opacity: 1,
            },
          }}
          onClick={() => navigate('/vacation/request/')}
        >
          New request
        </Box>
      ) : (
        requestData.map(({ id, type }) => (
          <Box
            onClick={() => navigate(`/vacation/request/${id}`)}
            key={id}
            mt="10px"
            sx={{ cursor: 'pointer' }}
          >
            <Typography>{type}</Typography>
          </Box>
        ))
      )}
    </>
  );
};
