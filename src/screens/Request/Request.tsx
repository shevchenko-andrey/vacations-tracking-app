import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import moment from 'moment';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { IRequest } from '../../models/request.models';
import { addNewRequest } from '../../service/vacationsRequestService';
import { Layout } from '../../shared/Layout';
import { Container } from '@mui/system';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextareaAutosize } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { MomentDateTimeFormat } from '../../models/moment.models';

const requestSchema = Yup.object().shape({
  type: Yup.string().min(2).max(10).required(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
  notes: Yup.string(),
});

const Request = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values: IRequest) => {
    await addNewRequest(values);
  };

  const formik = useFormik({
    initialValues: {
      type: '',
      startDate: moment(),
      endDate: moment(),
      notes: '',
    },

    validationSchema: requestSchema,

    onSubmit: async (values, actions) => {
      await handleSubmit(values);
      actions.resetForm();
      navigate('/bushboard');
    },
  });

  return (
    <Layout title="Request new vacantions" backLinkPath={'/dushboard'}>
      <Container>
        <Box display="flex" justifyContent="center">
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            noValidate
            sx={{ m: '0 auto' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Box>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="type"
                    label="Vacation Type"
                    name="type"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                  />
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                      label="Start Date"
                      inputFormat={MomentDateTimeFormat.DOT_FORMAT}
                      value={formik.values.startDate}
                      onChange={value =>
                        formik.setFieldValue('startDate', value)
                      }
                      renderInput={params => (
                        <TextField
                          fullWidth
                          margin="normal"
                          required
                          {...params}
                        />
                      )}
                    />
                    <DesktopDatePicker
                      label="End Date"
                      inputFormat={MomentDateTimeFormat.DOT_FORMAT}
                      value={formik.values.endDate}
                      onChange={value => formik.setFieldValue('endDate', value)}
                      renderInput={params => (
                        <TextField
                          fullWidth
                          margin="normal"
                          required
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box width="100%" height="100%" pt="20px" pb="20px">
                  <TextareaAutosize
                    id="notes"
                    style={{ width: '100%', height: '100%', padding: '20px' }}
                    name="notes"
                    maxRows={4}
                    onChange={formik.handleChange}
                    value={formik.values.notes}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Request;
