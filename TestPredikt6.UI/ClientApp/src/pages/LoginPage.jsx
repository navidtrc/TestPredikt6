import React, { useState } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
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
import { Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

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

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    debugger;
    e.preventDefault();
    this.setState({
      message: "",
      loading: true,
    });
    // this.form.validateAll();
    // if (this.checkBtn.context._errors.length === 0) {
    AuthService.login(this.state.username, this.state.password).then(
      () => {
        debugger;
        // this.props.history.push("/dashboard");
        // window.location.reload();
        window.location.href = "/dashboard";
      },
      (error) => {
        debugger;

        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
    // } else {
    //   this.setState({
    //     loading: false,
    //   });
    // }
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Card sx={{ borderRadius: "15px", mt: "75px" }} variant="outlined">
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
                  Login
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
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
                    value={this.state.username}
                    onChange={this.onChangeUsername}
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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                  <Grid container sx={{ my: 2, textAlign: "start" }}>
                    <Grid item xs={4} sx={{ mt: 1 }}>
                      <Link to="/reset-password">
                        <Typography variant="body2">
                          Forgot password?
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item xs={5.5} />
                    <Grid item xs={2.5} sx={{ textAlign: "end" }}>
                      <Button
                        disabled={this.state.loading}
                        type="submit"
                        variant="contained"
                        onClick={this.handleLogin}
                        sx={{
                          background: "#E5EFFF",
                          color: "black",
                          textTransform: "none",
                        }}
                      >
                        {this.state.loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                      </Button>
                      {this.state.message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {this.state.message}
                          </div>
                        </div>
                      )}
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2, textAlign: "end" }}>
                      <Link to="/register">
                        <Typography variant="body2">Register here</Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}
