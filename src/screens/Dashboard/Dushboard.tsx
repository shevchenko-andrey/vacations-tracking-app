import AddIcon from '@mui/icons-material/Add';
import React, { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../shared/Layout';
import { DushboardFilterMod, DashboardDataView } from './Dushboard.models';
import { Box, Fab, Typography, Button } from '@mui/material';
import { DushBoardTableView } from './DushboardTableView';
import { DushBoardCalendarView } from './DushboardCalendarView';
import { DushboardTogglePannel } from './DushboardTogglePannel';
import moment, { Moment } from 'moment';
import { DushboardDateControl } from './DushboardDateControl';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());
  const [filter, setFilter] = useState(DushboardFilterMod.ACTUAL);
  const [selectedView, setSelectedView] = useState(
    DashboardDataView.TABLE_VIEW
  );

  const handleToggleFilter = (
    _: React.MouseEvent<HTMLElement>,
    filter: SetStateAction<DushboardFilterMod>
  ) => {
    setFilter(filter);
  };

  const handleChangeView = () => {
    selectedView === DashboardDataView.TABLE_VIEW
      ? setSelectedView(DashboardDataView.CALENDAR_VIEW)
      : setSelectedView(DashboardDataView.TABLE_VIEW);
  };

  return (
    <Layout title="Dashboard">
      <Box component="section" pt="30px" pb="30px">
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems="center"
        >
          {selectedView === DashboardDataView.TABLE_VIEW ? (
            <DushboardTogglePannel
              filter={filter}
              handleToggleFilter={handleToggleFilter}
            />
          ) : (
            <DushboardDateControl
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
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
              {DashboardDataView.CALENDAR_VIEW}
            </Button>
          </Box>
        </Box>
        <Box overflow="auto" pt="30px" height="400px" width="100%">
          {selectedView === DashboardDataView.TABLE_VIEW ? (
            <DushBoardTableView filter={filter} />
          ) : (
            <DushBoardCalendarView selectedDate={selectedDate} />
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
