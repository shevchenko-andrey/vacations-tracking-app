import React, { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Layout } from '../../shared/Layout';
import { FilterMod, ViewMod } from './Dushboard.models';

import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Fab,
  Typography,
  Button,
} from '@mui/material';

import { DushBoardTableView } from './DushboardTableView';

export default function Dashboard() {
  const [filter, setFilter] = useState(FilterMod.ACTUAL);
  const [selectedView, setSelectedView] = useState(ViewMod.TABLE_VIEW);

  const handleTogleFilter = (
    _: React.MouseEvent<HTMLElement>,
    filter: SetStateAction<FilterMod>
  ) => {
    setFilter(filter);
  };

  const handleChangeView = () => {
    selectedView === ViewMod.TABLE_VIEW
      ? setSelectedView(ViewMod.CALENDAR_VIEW)
      : setSelectedView(ViewMod.TABLE_VIEW);
  };

  return (
    <Layout title="Dashboard">
      <Box component="section" pt="30px" pb="30px">
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems="center"
        >
          <Box maxWidth={'400px'}>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              value={filter}
              exclusive
              onChange={handleTogleFilter}
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
          <Box>
            <Fab
              component={Link}
              to="/vacation/request"
              color="primary"
              variant="extended"
              aria-label="add"
            >
              <AddIcon />
              <Box pr="20px" pl="20px">
                <Typography>New request</Typography>
              </Box>
            </Fab>
          </Box>
          <Box>
            <Button variant="contained" onClick={handleChangeView}>
              {selectedView}
            </Button>
          </Box>
        </Box>
        <Box overflow="auto" pt="30px" height="400px" width="100%">
          {selectedView === ViewMod.TABLE_VIEW ? (
            <DushBoardTableView filter={filter} />
          ) : null}
        </Box>
      </Box>
    </Layout>
  );
}
