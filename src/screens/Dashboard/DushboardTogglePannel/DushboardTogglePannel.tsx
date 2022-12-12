import { FC, SetStateAction } from 'react';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { DushboardFilterMod } from '../Dushboard.models';

interface TogglePannelProps {
  filter: string;
  handleToggleFilter: (
    _: React.MouseEvent<HTMLElement>,
    filter: SetStateAction<DushboardFilterMod>
  ) => void;
}

export const DushboardTogglePannel: FC<TogglePannelProps> = ({
  filter,
  handleToggleFilter,
}) => {
  return (
    <Box maxWidth={'400px'}>
      <ToggleButtonGroup
        fullWidth
        color="primary"
        value={filter}
        exclusive
        onChange={handleToggleFilter}
        aria-label="Platform"
      >
        <ToggleButton fullWidth value="actual">
          Actual
        </ToggleButton>
        <ToggleButton fullWidth value="history">
          History
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
