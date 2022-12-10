import moment from 'moment';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Skeleton, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { IRequestFullData } from '../../../models/request.models';
import { getRequests } from '../../../service/vacationsRequestService';
import { DushboardFilterMod } from '../Dushboard.models';
import { MomentDateTimeFormat } from '../../../models/moment.models';
import { useNavigate } from 'react-router-dom';

const TABLE_COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'Absence ID', width: 130 },
  { field: 'type', headerName: 'Type', width: 120 },
  {
    field: 'startDate',
    headerName: 'Start Date',
    width: 130,
    valueGetter: (
      params: GridValueGetterParams<GridColDef, IRequestFullData>
    ) => moment(params.row.startDate).format(MomentDateTimeFormat.DOT_FORMAT),
  },
  {
    field: 'endDate',
    headerName: 'End Date',
    width: 130,
    valueGetter: (
      params: GridValueGetterParams<GridColDef, IRequestFullData>
    ) => moment(params.row.endDate).format(MomentDateTimeFormat.DOT_FORMAT),
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 400,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 260,
    valueGetter: (
      params: GridValueGetterParams<GridColDef, IRequestFullData>
    ) =>
      moment(params.row.actions).format(MomentDateTimeFormat.SPAСE_FULL_FORMAT),
  },
];

interface ITableViewProps {
  filter: DushboardFilterMod;
}

export const DushBoardTableView: FC<ITableViewProps> = ({ filter }) => {
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
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  if (isLoading) {
    return (
      <Skeleton width={'100%'} component="div" height="400px">
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
      columns={TABLE_COLUMNS}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};
