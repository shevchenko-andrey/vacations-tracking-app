import AddIcon from '@mui/icons-material/Add';
import React, { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../shared/Layout';
import { DashboardFilterMod, DashboardDataView } from './Dashboard.models';
import { Box, Fab, Typography, Button } from '@mui/material';
import { DashboardTableView } from './DashboardTableView';
import { DashBoardCalendarView } from './DashboardCalendarView';
import { DashboardTogglePannel } from './DashboardTogglePannel';
import dayjs, { Dayjs } from 'dayjs';
import { DashboardDateControl } from './DashboardDateControl';
import { useCheckBreakpoint } from '../../hooks/useCheckBreakpoint';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(() => dayjs());
  const [filter, setFilter] = useState(DashboardFilterMod.ACTUAL);
  const [selectedView, setSelectedView] = useState(
    DashboardDataView.TABLE_VIEW
  );

  const { isMobile, isDesktop } = useCheckBreakpoint();

  const handleToggleFilter = (
    _: React.MouseEvent<HTMLElement>,
    filter: SetStateAction<DashboardFilterMod>
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
      <Box component="section" pb="60px" pt="30px">
        <Box
          display={'flex'}
          mt="30px"
          mb="30px"
          position="relative"
          justifyContent={'space-between'}
          alignItems="center"
        >
          {selectedView === DashboardDataView.TABLE_VIEW ? (
            <DashboardTogglePannel
              filter={filter}
              handleToggleFilter={handleToggleFilter}
            />
          ) : (
            <DashboardDateControl
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
          {isDesktop && (
            <Box top={30} left="50%">
              <Fab
                component={Link}
                to="/vacation/request"
                color="primary"
                variant="extended"
                aria-label="add"
              >
                <AddIcon />
                <Box pr="10px" pl="10px">
                  <Typography>New request</Typography>
                </Box>
              </Fab>
            </Box>
          )}

          <Box>
            <Button variant="contained" onClick={handleChangeView}>
              {selectedView === DashboardDataView.CALENDAR_VIEW
                ? DashboardDataView.TABLE_VIEW
                : DashboardDataView.CALENDAR_VIEW}
            </Button>
          </Box>
        </Box>
        <Box overflow="auto" height="400px" width="100%">
          {selectedView === DashboardDataView.TABLE_VIEW ? (
            <DashboardTableView filter={filter} />
          ) : (
            <DashBoardCalendarView selectedDate={selectedDate} />
          )}
        </Box>
      </Box>
      {isMobile && (
        <Box>
          <Fab
            component={Link}
            to="/vacation/request"
            color="primary"
            variant="extended"
            aria-label="add"
          >
            <AddIcon />
            <Box pr="10px" pl="10px">
              <Typography>New request</Typography>
            </Box>
          </Fab>
        </Box>
      )}
    </Layout>
  );
};

export default Dashboard;
