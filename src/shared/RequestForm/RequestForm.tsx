import { FC } from 'react';
import * as Yup from 'yup';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextareaAutosize } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { MomentDateTimeFormat } from '../../models/moment.models';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import moment from 'moment';
import { useFormik } from 'formik';
import { IRequest } from '../../models/request.models';

const requestSchema = Yup.object().shape({
  type: Yup.string().min(2).max(10).required(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
  notes: Yup.string(),
});

interface IRequestFormProps {
  handleSubmit: (values: IRequest) => void;
  initialValues?: IRequest;
}

export const RequestForm: FC<IRequestFormProps> = ({
  handleSubmit,
  initialValues,
}) => {
  const formik = useFormik({
    initialValues: initialValues ?? {
      type: '',
      startDate: moment(),
      endDate: moment(),
      notes: '',
    },

    validationSchema: requestSchema,

    onSubmit: handleSubmit,
  });
  return (
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
                onChange={value => formik.setFieldValue('startDate', value)}
                renderInput={params => (
                  <TextField fullWidth margin="normal" required {...params} />
                )}
              />
              <DesktopDatePicker
                label="End Date"
                inputFormat={MomentDateTimeFormat.DOT_FORMAT}
                value={formik.values.endDate}
                onChange={value => formik.setFieldValue('endDate', value)}
                renderInput={params => (
                  <TextField fullWidth margin="normal" required {...params} />
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
  );
};
