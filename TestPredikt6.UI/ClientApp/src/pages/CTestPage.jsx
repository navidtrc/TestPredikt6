import {
  Box,
  Button,
  Card, CardActions,
  CardContent, CardHeader, Checkbox,
  Container,
  createTheme,
  CssBaseline, FormControlLabel, FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import map from '../assets/map.svg'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

export default function CTestPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
        ·• C-Test (Readme) •·
        </Typography>
        <Grid container spacing={2} sx={{mt:3,px:40}}>
          <Grid item xs={12} sx={{minHeight:"450px"}}>
            <Typography variant='body2'>
              The C-test is a test of general language proficiency. A paragraph of text will be displayed where after the first or second sentence, the second half of every second word will be removed. Your job is to fill in the correct missing letters. You will have to complete a set of four C-Tests in a single sitting.
            </Typography>
            <Typography variant='body2'>
              Once you begin the test, you may choose to leave the test at any time, but you will <strong>lose any progress made throughout the test</strong>.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{mt:3}}>
          <Grid item xs={2}>
            <Link to='/dashboard'>
              <Button
                variant="outlined"
                color='primary'
                sx={{
                  color: "#000",
                  background: '#fff',
                  textTransform: "none",
                }}
              >
                Back to dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard/c-test-2'>
              <Button
                variant="contained"
                color='primary'
                sx={{
                  textTransform: "none",
                }}
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
