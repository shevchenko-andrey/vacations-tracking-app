import Box from '@mui/material/Box';
import { IRequest } from '../../models/request.models';
import { addNewRequest } from '../../service/vacationsRequestService';
import { Layout } from '../../shared/Layout';
import { useNavigate, useLocation } from 'react-router-dom';
import { RequestForm } from '../../shared/RequestForm/RequestForm';

const Request = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleSubmit = async (values: IRequest) => {
    await addNewRequest(values);
    navigate('/dushboard');
  };

  return (
    <Layout title="Request new vacantions" backLinkPath={'/dushboard'}>
      <Box pt="60px" display="flex" justifyContent="center">
        <RequestForm handleSubmit={handleSubmit} />
      </Box>
    </Layout>
  );
};

export default Request;
