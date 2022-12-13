import { FC, SetStateAction } from 'react';
import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { DashboardFilterMod } from '../Dashboard.models';

interface TogglePannelProps {
  filter: string;
  handleToggleFilter: (
    _: React.MouseEvent<HTMLElement>,
    filter: SetStateAction<DashboardFilterMod>
  ) => void;
}

export const DashboardTogglePannel: FC<TogglePannelProps> = ({
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
