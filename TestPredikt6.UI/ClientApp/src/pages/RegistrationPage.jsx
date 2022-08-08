import React, { useState } from "react";
import { Link } from "react-router-dom";
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

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeConfirmEmail = this.onChangeConfirmEmail.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.state = {
      name: "",
      email: "",
      confirmEmail: "",
      code: "",
      password: "",
      confirmPassword: "",
      successful: false,
      message: "",
      progress: 0,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeConfirmEmail(e) {
    this.setState({
      confirmEmail: e.target.value,
    });
  }
  onChangeCode(e) {
    this.setState({
      code: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

    handleSubmit(event) {
        debugger;
    const { progress } = this.state;
    event.preventDefault();
    switch (progress) {
      case 0:
        AuthService.register(
          this.state.name,
          this.state.email,
          this.state.confirmEmail
        ).then(
          (response) => {
            this.setState((prevState) => {
              return {
                message: response.data.data.message,
                successful: true,
                progress: prevState.progress + 1,
              };
            });
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.setState({
              successful: false,
              message: resMessage,
            });
          }
        );
        break;

      case 1:
        AuthService.emailConfirmation(
          this.state.email,
          this.state.code,
          this.state.password,
          this.state.confirmPassword
        ).then(
          (response) => {
            this.setState((prevState) => {
              return {
                message: response.data.data.message,
                successful: true,
                progress: prevState.progress + 1,
              };
            });
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            this.setState({
              successful: false,
              message: resMessage,
            });
          }
        );
        break;
      default:
        break;
    }
  }

  render() {
    const { progress } = this.state;
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
                    Registration
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={this.handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
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
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      autoFocus
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
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
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
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
                      id="confirm-email"
                      label="Confirm Email Address"
                      name="confirmEmail"
                      autoComplete="confirm-email"
                      value={this.state.confirmEmail}
                      onChange={this.onChangeConfirmEmail}
                    />
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "start", mb: 25 }}
                    >
                      Important: Please double-check your email address as it
                      will be sent a confirmation code.
                    </Typography>
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
                    Registration
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={this.handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "start", mt: 3 }}
                    >
                      Enter the confirmation code you received via{" "}
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
                      value={this.state.code}
                      onChange={this.onChangeCode}
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
                      value={this.state.password}
                      onChange={this.onChangePassword}
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
                      value={this.state.confirmPassword}
                      onChange={this.onChangeConfirmPassword}
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
                    Hooray!{" "}
                    <CheckCircleOutlinedIcon
                      sx={{ transform: "translate(0,20%)", color: "green" }}
                    />
                  </Typography>
                  <Box sx={{ mt: 1, mx: 5 }}>
                    <Typography
                      variant="body"
                      sx={{ textAlign: "start", mt: 3, fontWeight: 600 }}
                    >
                      <p>Dear {name},</p>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "start", mt: 3 }}
                    >
                      Welcome to TestPredikt™!
                      <br />
                      Your registration was successful. You may now login.
                    </Typography>
                  </Box>
                  <Grid container sx={{ my: 2 }}>
                    <Grid item xs={9.5} />
                    <Grid item xs={2.5}>
                      <Link to="/login">
                        <Button
                          variant="contained"
                          sx={{
                            color: "black",
                            textTransform: "none",
                          }}
                        >
                          Next
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
}
