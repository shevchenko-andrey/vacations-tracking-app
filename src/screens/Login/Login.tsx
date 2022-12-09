import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useUserContext } from '../../contexts/UserContext';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(8).required(),
});

export default function Login() {
  const { handleLogin, isLoggedIn } = useUserContext();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },

    validationSchema: loginSchema,

    onSubmit: values => {
      handleLogin(values);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate mt="1">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                value="remember"
                color="primary"
                onChange={formik.handleChange}
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
      {isLoggedIn && <Navigate to="/dushboard" />}
    </Container>
  );
}
