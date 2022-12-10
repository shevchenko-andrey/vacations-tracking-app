import Box from '@mui/material/Box';
import { IRequest } from '../../models/request.models';
import { addNewRequest } from '../../service/vacationsRequestService';
import { Layout } from '../../shared/Layout';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { RequestForm } from '../../shared/RequestForm/RequestForm';

const Request = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values: IRequest) => {
    await addNewRequest(values);
    navigate('/dushboard');
  };

  return (
    <Layout title="Request new vacantions" backLinkPath={'/dushboard'}>
      <Container>
        <Box display="flex" justifyContent="center">
          <RequestForm handleSubmit={handleSubmit} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Request;
