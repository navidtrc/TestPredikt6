import {
  Box,
  Button,
  Card, CardActions,
  CardContent, CardHeader, Checkbox,
  Container,
  createTheme,
  CssBaseline, FormControl, FormControlLabel, FormGroup,
  Grid, InputLabel, MenuItem, Select,
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

export default function VTest4Page() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
        ·• V-Test •·
        </Typography>
        <Box sx={{maxWidth:"600px", textAlign:"start"}}>
        <Grid container spacing={2} sx={{mt:3,mx:6}}>
          <Grid item xs={12}>
            <Typography variant='body2'>
              Submitted! Now it is time for the Results
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to='/dashboard'>
              <Button
                variant="contained"
                color='primary'
                sx={{
                  textTransform: "none",
                }}
              >
                Continue
              </Button>
            </Link>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
