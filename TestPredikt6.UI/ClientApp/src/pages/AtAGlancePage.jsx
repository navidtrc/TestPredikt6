import {
  Box,
  Button,
  Card, CardActions,
  CardContent, CardHeader,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import map from '../assets/map.svg'

import SecondAppBar from '../components/SecondAppBar';
import WizardComponent from '../components/WizardComponent';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  // palette: {
  //   secondary: {
  //     main: "#7f7f7f",
  //   },
  // },
});



export default function AtAGlancePage() {
  return (
    <ThemeProvider theme={theme}>
      <SecondAppBar title="·• Your TestPredikt™ Journey •·"></SecondAppBar>
      <WizardComponent step="0"></WizardComponent>
      {/* {WizardComponent()} */}
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{ mt: 3 }} component='h4' variant='h4'>

        </Typography>
        <Grid container spacing={2} sx={{ mt: 10 }}>
          <Grid item xs={12}>
            <img src={map} style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard'>
              <Button
                variant="outlined"
                color='primary'
                sx={{
                  color: "#000",
                  background: '#fff',
                  textTransform: "none",
                  whiteSpace: "nowrap"
                }}

              >
                Back to dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard/payment'>
              <Button
                variant="outlined"
                color='primary'
                sx={{
                  background: '#E5EFFF',
                  textTransform: "none",
                }}
              >
                Start
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
