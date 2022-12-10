import Box from '@mui/material/Box';
import { IRequest } from '../../models/request.models';
import moment from 'moment';
import {
  editRequestById,
  getRequestById,
} from '../../service/vacationsRequestService';
import { Layout } from '../../shared/Layout';
import { Container } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { RequestForm } from '../../shared/RequestForm/RequestForm';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

const RequestEdit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [initialValues, setInitialValues] = useState<IRequest>({
    type: '',
    startDate: moment(),
    endDate: moment(),
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
        startDate: moment(startDate),
        endDate: moment(endDate),
      });
    };
    try {
      setIsloading(true);
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

  return (
    <Layout
      title={`Edit request #${params.requestId}`}
      backLinkPath={'/dushboard'}
    >
      <Container>
        <Box display="flex" justifyContent="center">
          {isLoading ? (
            <Skeleton />
          ) : (
            <RequestForm
              initialValues={initialValues}
              handleSubmit={handleSubmit}
            />
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default RequestEdit;
