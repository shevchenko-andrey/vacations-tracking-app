import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { Box, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IRequest } from '../../../models/request.models';
import { getRequests } from '../../../service/vacationsRequestService';
import { FilterMod } from '../Dushboard.models';

const TABLE_COLUMNS: GridColDef<GridValidRowModel, string, string>[] = [
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

interface ITableViewProps {
  filter: FilterMod;
}

export const DushBoardTableView = ({ filter }: ITableViewProps) => {
  const [tableRows, setTableRows] = useState<IRequest[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  if (tableRows.length < 1) {
    return (
      <Box display="flex" justifyContent="center">
        <Typography>First add data</Typography>
      </Box>
    );
  }

  return (
    <DataGrid
      rows={tableRows}
      columns={TABLE_COLUMNS}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};
