import { FC } from 'react';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextareaAutosize } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { DateTimeFormat } from '../../models/dayjs.models';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { IRequest } from '../../models/request.models';
import { useCheckBreakpoint } from '../../hooks/useCheckBreakpoint';

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
  const { isMobile, isDesktop } = useCheckBreakpoint();
  const formik = useFormik({
    initialValues: initialValues ?? {
      type: '',
      startDate: dayjs(),
      endDate: dayjs(),
      notes: '',
    },

    validationSchema: requestSchema,

    onSubmit: handleSubmit,
  });

  const SelectedDatePicker = isMobile ? MobileDatePicker : DesktopDatePicker;

  const maxDate = dayjs().add(365, 'days');

  const minDate = dayjs().subtract(365, 'days');

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      alignItems="center"
      noValidate
      display="flex"
      justifyContent="space-between"
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

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SelectedDatePicker
            maxDate={maxDate}
            minDate={minDate}
            label="Start Date"
            inputFormat={DateTimeFormat.DOT_FORMAT}
            value={formik.values.startDate}
            onChange={date => formik.setFieldValue('startDate', date)}
            renderInput={params => (
              <TextField fullWidth margin="normal" required {...params} />
            )}
          />
          <SelectedDatePicker
            maxDate={maxDate}
            minDate={minDate}
            label="End Date"
            inputFormat={DateTimeFormat.DOT_FORMAT}
            value={formik.values.endDate}
            onChange={date => formik.setFieldValue('endDate', date)}
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
      {isDesktop && (
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
