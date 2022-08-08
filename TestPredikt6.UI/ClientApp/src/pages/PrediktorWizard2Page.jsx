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
    AppBar
  } from "@mui/material";
  import { ThemeProvider } from "@emotion/react";
  import { Link } from "react-router-dom";
  
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
    }
  });
  
  import Swal from 'sweetalert2'
  import withReactContent from 'sweetalert2-react-content'
  
  const MySwal = withReactContent(Swal)
  
  function showDialog() {
    Swal.fire({
      title: "Congratulation! ",
      icon: 'success',
      html: '<div style="text-align: left;">You have completed your TestPredikt™ journey. Now lets view your predicted language test score.</div>',
      confirmButtonColor: theme.palette.primary.main,
      confirmButtonText:
        '<a href="/dashboard/c-test">Continue</a>',
    })
    // .then(() => {
    //   return MySwal.fire(<p>Shorthand works too</p>)
    // })
  }
  
  
  
  
  export default function PrediktorWizard2Page() {
    return (
      <ThemeProvider theme={theme}>
        <SecondAppBar title="·• Prediktor™ Wizard •·"></SecondAppBar>
        <WizardComponent step="2"></WizardComponent>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box sx={{ maxWidth: "400px", textAlign: "start", mx: 18 }}>
            <Grid container spacing={2} sx={{ mt: 3, mx: 6 }}>
              <Grid item xs={12}>
                <Typography variant='body2'>
                  1. Which year were you born?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '200px' }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={''}
                    label="Age"
                  >
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2013}>2013</MenuItem>
                    <MenuItem value={2012}>2012</MenuItem>
                    <MenuItem value={2011}>2011</MenuItem>
                    <MenuItem value={2009}>2009</MenuItem>
                    <MenuItem value={2008}>2008</MenuItem>
                    <MenuItem value={2007}>2007</MenuItem>
                    <MenuItem value={2006}>2006</MenuItem>
                    <MenuItem value={2005}>2005</MenuItem>
                    <MenuItem value={2004}>2004</MenuItem>
                    <MenuItem value={2003}>2003</MenuItem>
                    <MenuItem value={2002}>2002</MenuItem>
                    <MenuItem value={2001}>2001</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                    <MenuItem value={1999}>1999</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
  
              <Grid item xs={12}>
                <Typography variant='body2'>
                  2. What country are you currently living in?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Canada
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Bangladesh
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Japan
                </Button>
              </Grid>
  
              <Grid item xs={12}>
                <Typography variant='body2'>
                  3. What is your gender?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Male
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Female
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Non-binary
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Other
                </Button>
              </Grid>
  
              <Grid item xs={12}>
                <Typography variant='body2'>
                  4. What is your current employment status?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Full-time
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Part-time
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Unemployed
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color='primary'
                  sx={{ background: "#E5E5E5", color: "#000", textTransform: "none", borderRadius: 4, mx: 1 }}
                >
                  Retired
                </Button>
              </Grid>
  
              <Grid item xs={12}>
                <Typography variant='body2'>
                  5. What industry are you currently working in?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '200px' }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={''}
                    label="Age"
                  >
                    <MenuItem value={2021}>Agriculture</MenuItem>
                    <MenuItem value={2020}>IT</MenuItem>
                    <MenuItem value={2019}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
  
              <Grid item xs={12}>
                <Typography variant='body2'>
                  6. What is your current employment position?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '200px' }}>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={''}
                    label="Age"
                  >
                    <MenuItem value={2021}>Intern</MenuItem>
                    <MenuItem value={2020}>Junior</MenuItem>
                    <MenuItem value={2019}>Senior</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={2} sx={{ mt: 3, mx: 6, mb: 3 }}>
            <Grid item xs={3}>
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
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={3}>
              {/* <Link to='/dashboard/prediktor-wizard-3'> */}
                <Button
                  variant="contained"
                  color='primary'
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => showDialog()}
                >
                  Confirm & next step
                </Button>
              {/* </Link> */}
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
  