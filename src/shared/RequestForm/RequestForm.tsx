import { FC } from 'react';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextareaAutosize, Select, InputLabel, MenuItem } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { DateTimeFormat } from '../../models/dayjs.models';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import { IRequest, VacationType } from '../../models/request.models';
import { useCheckBreakpoint } from '../../hooks/useCheckBreakpoint';

const requestSchema = Yup.object().shape({
  type: Yup.string().min(2).max(20).required(),
  startDate: Yup.date().required(),
  endDate: Yup.date()
    .min(
      Yup.ref('startDate'),
      'You cannot assign the end of the vacation before it starts'
    )
    .required(),
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
      type: VacationType.Sports_Vacation,
      startDate: null,
      endDate: null,
      notes: '',
    },

    validationSchema: requestSchema,

    onSubmit: handleSubmit,
  });

  const SelectedDatePicker = isMobile ? MobileDatePicker : DesktopDatePicker;

  const maxDate = dayjs().add(365, 'days');

  const minDate = dayjs();

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
        <Box>
          <InputLabel margin="dense" id="select-label-type">
            Type
          </InputLabel>
          <Select
            fullWidth
            placeholder="Type"
            labelId="select-label-type"
            id="vacation-type-select"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          >
            <MenuItem value={VacationType.Staycation}>Staycation</MenuItem>
            <MenuItem value={VacationType.Sports_Vacation}>
              Sports Vacation
            </MenuItem>
            <MenuItem value={VacationType.Cruise_Vacation}>
              Cruise Vacation
            </MenuItem>
            <MenuItem value={VacationType.Volunteer_Vacation}>
              Volunteer Vacation
            </MenuItem>
            <MenuItem value={VacationType.Beach_Vacation}>
              Beach Vacation
            </MenuItem>
            <MenuItem value={VacationType.Camping_Vacation}>
              Camping vacation
            </MenuItem>
            <MenuItem value={VacationType.Road_Trip_Vacation}>
              Road Trip Vacation
            </MenuItem>
            <MenuItem value={VacationType.Sightseeing_Type_Of_Vacation}>
              Sightseeing Type Of Vacation
            </MenuItem>
          </Select>
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SelectedDatePicker
            maxDate={maxDate}
            minDate={minDate}
            label="Start Date"
            inputFormat={DateTimeFormat.DOT_FORMAT}
            value={formik.values.startDate}
            onChange={date => formik.setFieldValue('startDate', date)}
            renderInput={params => (
              <TextField
                error={
                  formik.touched.startDate && Boolean(formik.errors.endDate)
                }
                helperText={
                  formik.errors.endDate && formik.touched.startDate
                    ? formik.errors.endDate
                    : ''
                }
                fullWidth
                margin="normal"
                required
                {...params}
              />
            )}
          />
          <SelectedDatePicker
            maxDate={maxDate}
            minDate={formik.values.startDate}
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
