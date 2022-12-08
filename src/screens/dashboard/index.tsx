import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { Layout } from '../../shared/Layout';
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Fab,
  Typography,
  Button,
} from '@mui/material';
import { IRequest } from '../../models/request.models';

// Mock data
const columns: GridColDef<GridValidRowModel, string, string>[] = [
  { field: 'id', headerName: 'Absence ID', width: 130 },
  { field: 'type', headerName: 'Type', width: 120 },
  { field: 'startDate', headerName: 'Start Date', width: 130 },
  { field: 'endDate', headerName: 'End Date', width: 130 },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 500,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 130,
  },
];

const rows: IRequest[] = [
  {
    id: 1,
    type: 'normal',
    startDate: '20.09.2000',
    endDate: '20.10.2000',
    notes: `Lorem ipsum dolor
     sit amet, consectetur
      adipiscing elit, sed
       do eiusmod tempor
        incididunt`,
    actions: 'birthday',
  },
  {
    id: 2,
    type: 'normal',
    startDate: '20.09.2000',
    endDate: '20.10.2000',
    notes: `Lorem ipsum dolor
     sit amet, consectetur
      adipiscing elit, sed
       do eiusmod tempor
        incididunt`,
    actions: 'birthday',
  },
  {
    id: 3,
    type: 'normal',
    startDate: '20.09.2000',
    endDate: '20.10.2000',
    notes: `Lorem ipsum dolor
     sit amet, consectetur
      adipiscing elit, sed
       do eiusmod tempor
        incididunt`,
    actions: 'birthday',
  },
  {
    id: 4,
    type: 'normal',
    startDate: '20.09.2000',
    endDate: '20.10.2000',
    notes: `Lorem ipsum dolor
     sit amet, consectetur
      adipiscing elit, sed
       do eiusmod tempor
        incididunt`,
    actions: 'birthday',
  },
];

export default function DashboardPage() {
  const [filter, setFilter] = useState('actual');
  const [selectedView, setSelectedView] = useState('table view');

  const handleTogleFilter = (
    event: React.MouseEvent<HTMLElement>,
    filter: string
  ) => {
    setFilter(filter);
  };

  const handleChangeView = () => {
    selectedView === 'table view'
      ? setSelectedView('calendar view')
      : setSelectedView('table view');
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
            <Fab color="primary" variant="extended" aria-label="add">
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
          {selectedView === 'table view' ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          ) : null}
        </Box>
      </Box>
    </Layout>
  );
}
