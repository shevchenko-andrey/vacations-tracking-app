import Box from '@mui/material/Box';
import { IRequest, VacationType } from '../../models/request.models';
import dayjs from 'dayjs';
import {
  getRequestById,
  editRequestById,
  deleteRequestById,
} from '../../service/vacationsRequestService';
import { Layout } from '../../shared/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import { RequestForm } from '../../shared/RequestForm/RequestForm';
import { useEffect, useState } from 'react';
import { Button, Skeleton } from '@mui/material';

const RequestEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [initialValues, setInitialValues] = useState<IRequest>({
    type: VacationType.Staycation,
    startDate: dayjs(),
    endDate: dayjs(),
    notes: '',
  });

  useEffect(() => {
    const fetchInitialValues = async (requestId: number) => {
      const response = await getRequestById(requestId);

      if (!response) return;
      const { endDate, startDate, notes, type } = response;

      setInitialValues({
        type,
        notes,
        startDate: dayjs(startDate),
        endDate: dayjs(endDate),
      });
    };

    try {
      fetchInitialValues(Number(params.requestId));
      setIsloading(false);
    } catch (error) {
    } finally {
      setIsloading(false);
    }
  }, [params.requestId]);

  const handleSubmit = async (values: IRequest) => {
    await editRequestById(Number(params.requestId), values);
    navigate('/dushboard');
  };

  const handleDeleteRequest = async () => {
    await deleteRequestById(Number(params.requestId));
    navigate('/dushboard');
  };

  return (
    <Layout
      title={`Edit request #${params.requestId}`}
      backLinkPath={'/dushboard'}
    >
      <Box pt="60px" display="flex" justifyContent="center">
        {isLoading ? (
          <Skeleton />
        ) : (
          <Box>
            <RequestForm
              initialValues={initialValues}
              handleSubmit={handleSubmit}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button
                color="error"
                variant="outlined"
                onClick={handleDeleteRequest}
              >
                Delete
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default RequestEdit;
