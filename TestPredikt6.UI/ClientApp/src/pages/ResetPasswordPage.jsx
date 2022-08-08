import { useState } from "react";
import AuthService from "../services/auth.service";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Link } from "react-router-dom";
import { ThermostatOutlined } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Fira Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});


export default function ResetPasswordPage (props) {
  const [ code, setCode] = useState("");
  const [ password, setPassword] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");
  const [ email, setEmail] = useState("");
  const [ progress, setProgress] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (progress) {
      case 0:
        debugger;
        AuthService.forgetPassword(email).then(
          (response) => {
            setProgress((prev) => prev + 1);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
        break;
      case 1:
        AuthService.resetPassword(
          email,
          code,
          password,
          confirmPassword
        ).then(
          (response) => {
            setProgress((prev) => prev + 1);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
        break;

      default:
        break;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card sx={{ borderRadius: "15px", mt: "75px" }} variant="outlined">
          {progress === 0 ? (
            <CardContent>
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Reset Password
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 2, minWidth: "80%" }}
                >
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "15px",
                      },
                    }}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                  />

                  <Grid container sx={{ my: 2 }}>
                    <Grid item xs={9.5} />
                    <Grid item xs={2.5}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          background: "#E5EFFF",
                          color: "black",
                          textTransform: "none",
                        }}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </CardContent>
          ) : null}
          {progress === 1 ? (
            <CardContent>
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Reset Password
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "start", mt: 3 }}
                  >
                    Enter the reset password code you received via{" "}
                    <strong>email</strong>.
                  </Typography>
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "15px",
                      },
                    }}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="confirm"
                    label="Confirmation Code"
                    name="confirm"
                    autoComplete="confirm"
                    autoFocus
                    value={code}
                    onChange={(e) => { setCode(e.target.value) }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "start", mt: 10 }}
                  >
                    Choose a strong password for your TestPredikt™ account.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "start", mx: 1 }}
                  >
                    <li>
                      It <strong>MUST</strong> be: at least 8 characters long
                    </li>
                    <li>
                      I’d better be: a combination of letters, numbers and
                      special characters
                    </li>
                  </Typography>
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "15px",
                      },
                    }}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                  <TextField
                    sx={{
                      "& fieldset": {
                        borderRadius: "15px",
                      },
                    }}
                    margin="normal"
                    required
                    fullWidth
                    name="cPassword"
                    label="Confirm Password"
                    type="password"
                    id="c-password"
                    autoComplete="c-password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                  />
                  <Grid container sx={{ my: 2 }}>
                    <Grid item xs={9.5} />
                    <Grid item xs={2.5}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          background: "#E5EFFF",
                          color: "black",
                          textTransform: "none",
                        }}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </CardContent>
          ) : null}
          {progress === 2 ? (
            <CardContent>
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Changed!{" "}
                  <CheckCircleOutlinedIcon
                    sx={{ transform: "translate(0,20%)", color: "green" }}
                  />
                </Typography>
                <Box sx={{ mt: 1, mx: 5 }}>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "start", mt: 3 }}
                  >
                    <p>
                      Reset password process was successful. You may now login
                      with your new password.
                    </p>
                  </Typography>
                </Box>
                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={9.5} />
                  <Grid item xs={2.5}>
                    <Link to="/login">
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                        }}
                      >
                        Login
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          ) : null}
        </Card>
      </Container>
    </ThemeProvider>
  );

}