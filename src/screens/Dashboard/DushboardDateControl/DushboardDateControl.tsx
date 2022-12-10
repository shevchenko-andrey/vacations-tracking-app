import { FC } from 'react';
import { Moment } from 'moment';
import { Box } from '@mui/system';
import { ButtonGroup, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { MomentDateTimeFormat } from '../../../models/moment.models';

interface DateControlProps {
  selectedDate: Moment;
  setSelectedDate: (date: Moment) => void;
}

export const DushboardDateControl: FC<DateControlProps> = ({
  setSelectedDate,
  selectedDate,
}) => {
  const handlePickPrevMonth = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'month'));
  };

  const handlePickNextMonth = () => {
    setSelectedDate(selectedDate.clone().add(1, 'month'));
  };
  return (
    <Box display="flex" alignItems="center">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <IconButton onClick={handlePickPrevMonth}>
          <NavigateBeforeIcon />
        </IconButton>

        <IconButton onClick={handlePickNextMonth}>
          <NavigateNextIcon />
        </IconButton>
      </ButtonGroup>
      <Box ml="20px">
        {selectedDate.format(MomentDateTimeFormat.SPACE_MONTH_YEAR_FORMAT)}
      </Box>
    </Box>
  );
};
