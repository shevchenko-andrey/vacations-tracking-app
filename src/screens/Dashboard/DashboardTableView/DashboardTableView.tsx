import dayjs from 'dayjs';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Skeleton, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { IRequestFullData } from '../../../models/request.models';
import { getRequests } from '../../../service/vacationsRequestService';
import { DashboardFilterMod } from '../Dashboard.models';
import { DateTimeFormat } from '../../../models/dayjs.models';
import { useNavigate } from 'react-router-dom';

interface ITableViewProps {
  filter: DashboardFilterMod;
}

const TABLE_COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'Absence ID', width: 130 },
  { field: 'type', headerName: 'Type', width: 120 },
  {
    field: 'startDate',
    headerName: 'Start Date',
    width: 130,
    valueGetter: (
      params: GridValueGetterParams<GridColDef, IRequestFullData>
    ) => dayjs(params.row.startDate).format(DateTimeFormat.DOT_FORMAT),
  },
  {
    field: 'endDate',
    headerName: 'End Date',
    width: 130,
    valueGetter: (
      params: GridValueGetterParams<GridColDef, IRequestFullData>
    ) => dayjs(params.row.endDate).format(DateTimeFormat.DOT_FORMAT),
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 400,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 260,
    valueGetter: (
      params: GridValueGetterParams<GridColDef, IRequestFullData>
    ) => dayjs(params.row.action).fromNow(),
  },
];

export const DashboardTableView: FC<ITableViewProps> = ({ filter }) => {
  const [tableRows, setTableRows] = useState<IRequestFullData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRequest = async () => {
      const tableRows = await getRequests({ filter });
      setTableRows(tableRows);
    };
    try {
      setIsLoading(true);
      fetchUserRequest();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  if (isLoading) {
    return (
      <Skeleton width={'100%'} component="div" height="500px">
        <DataGrid rows={tableRows} columns={TABLE_COLUMNS} />
      </Skeleton>
    );
  }
  if (tableRows.length === 0) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography>First add data</Typography>
      </Box>
    );
  }

  return (
    <DataGrid
      onCellClick={({ id }) => navigate(`/vacation/request/${id}`)}
      rows={tableRows}
      sx={{ overflow: 'auto', minHeight: '500px', width: '100%' }}
      columns={TABLE_COLUMNS}
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
  );
};
