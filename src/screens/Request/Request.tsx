import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IRequest } from '../../models/request.models';
import { addNewRequest } from '../../service/vacationsRequestService';
import { Layout } from '../../shared/Layout';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import { TextareaAutosize } from '@mui/material';

const requestSchema = Yup.object().shape({
  type: Yup.string().min(2).max(10).required(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
  notes: Yup.string(),
});

export default function Request() {
  const handleSubmit = async (values: IRequest) => {
    await addNewRequest(values);
  };

  const formik = useFormik({
    initialValues: {
      type: '',
      startDate: new Date(),
      endDate: new Date(),
      notes: '',
    },

    validationSchema: requestSchema,

    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
  });

  return (
    <Layout title="Request new vacantions">
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

                  <TextField
                    type="date"
                    margin="normal"
                    required
                    fullWidth
                    name="startDate"
                    label="Start Date"
                    id="startDate"
                    onChange={formik.handleChange}
                    value={formik.values.startDate}
                    error={
                      formik.touched.startDate &&
                      Boolean(formik.errors.startDate)
                    }
                    helperText={
                      formik.touched.startDate &&
                      Boolean(formik.errors.startDate)
                    }
                  ></TextField>

                  <TextField
                    type="date"
                    margin="normal"
                    required
                    fullWidth
                    name="endDate"
                    label="End Date"
                    id="endDate"
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                    error={
                      formik.touched.endDate && Boolean(formik.errors.endDate)
                    }
                    helperText={
                      formik.touched.endDate && Boolean(formik.errors.endDate)
                    }
                  ></TextField>

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
      {formik.isSubmitting && <Navigate to="/dushboard" />}
    </Layout>
  );
}
