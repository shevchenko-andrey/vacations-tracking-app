import { FC } from 'react';
import * as Yup from 'yup';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextareaAutosize, useMediaQuery } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { MomentDateTimeFormat } from '../../models/moment.models';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import moment from 'moment';
import { useFormik } from 'formik';
import { IRequest } from '../../models/request.models';
import { useTheme } from '@mui/system';

const requestSchema = Yup.object().shape({
  type: Yup.string().min(2).max(20).required(),
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

  const SelectedDatePicker = isMobile ? MobileDatePicker : DesktopDatePicker;

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      alignItems="center"
      noValidate
      display="flex"
      justifyContent="space-between"
      sx={{ m: '0 auto' }}
    >
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
          <SelectedDatePicker
            label="Start Date"
            inputFormat={MomentDateTimeFormat.DOT_FORMAT}
            value={formik.values.startDate}
            onChange={value => formik.setFieldValue('startDate', value)}
            renderInput={params => (
              <TextField fullWidth margin="normal" required {...params} />
            )}
          />
          <SelectedDatePicker
            label="End Date"
            inputFormat={MomentDateTimeFormat.DOT_FORMAT}
            value={formik.values.endDate}
            onChange={value => formik.setFieldValue('endDate', value)}
            renderInput={params => (
              <TextField fullWidth margin="normal" required {...params} />
            )}
          />
        </LocalizationProvider>
        {isMobile && (
          <TextareaAutosize
            id="notes"
            style={{
              display: 'block',
              width: '100%',
              marginTop: '10px',
              padding: '10px',
            }}
            minRows={15}
            name="notes"
            onChange={formik.handleChange}
            value={formik.values.notes}
          />
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
      {!isMobile && (
        <TextareaAutosize
          id="notes"
          style={{
            display: 'block',
            width: '100%',
            marginLeft: '20px',
            padding: '10px',
          }}
          minRows={17}
          name="notes"
          onChange={formik.handleChange}
          value={formik.values.notes}
        />
      )}
    </Box>
  );
};
