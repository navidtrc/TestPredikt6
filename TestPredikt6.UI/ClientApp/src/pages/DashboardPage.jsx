import {
  Box,
  Button, IconButton,
  Card, CardActions,
  CardContent, CardHeader,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import playpause from '../assets/playpause.svg'
import seekbar from '../assets/seekbar.svg'
import alltests from '../assets/alltests.svg'
import InfoIcon from '@mui/icons-material/Info';
import SecondAppBar from '../components/SecondAppBar';

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

export default function DashboardPage() {
  return (
    <ThemeProvider theme={theme}>
      <SecondAppBar title="·• Dashboard •·"></SecondAppBar>
      <Container component="main" maxWidth="lg" sx={{ mt: 5 }}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ borderRadius: 4, background: '#EFF0F5', color: "#000", minHeight: '275px' }}>
              <CardContent sx={{ mx: 0, textAlign: 'center' }}>
                <Typography fontWeight="700" variant='h6'>IMPORTANT!</Typography>
                <Typography fontWeight="700" variant='h6'>Read before you begin</Typography>
              </CardContent>
              <CardContent sx={{ mt: -2, textAlign: 'start' }}>
                <Typography variant='body2'>
                  Click on “Read more” to learn about your TestPredikt™ journey:<strong>Prediktor™ Wizard</strong>,<strong>C-Test</strong>  and <strong>V-Test</strong>.
                </Typography>
              </CardContent>
              <CardActions sx={{ mx: 0, mb: 1, justifyContent: "center" }}>
                <Link to='/dashboard/terminology'>
                  <Button
                    variant="contained"
                    color='primary'
                    sx={{ background: "#fff", color: "#000", textTransform: "none", borderRadius: 3, }}
                  >
                    Read more
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ borderRadius: 4, background: '#FFEEF8', color: "#C11574", minHeight: '275px' }}>
              <CardContent sx={{ mx: 1 }} >
                <Typography fontWeight="700" variant='h6'>Discounts & offers</Typography>
              </CardContent>
              <CardContent sx={{ mt: 5, textAlign: 'start' }}>
                <Typography variant='body2'>
                  Upload your official test results form to improve your prediction, and receive a $X TestPredikt™ credit.
                </Typography>
              </CardContent>
              <CardActions sx={{ mx: 1, mb: 1, mt: 2, justifyContent: "center" }}>
                <Link to='/dashboard/upload'>
                  <Button
                    variant="contained"
                    color='primary'
                    sx={{ background: "#fff", color: "#000", textTransform: "none", borderRadius: 3, }}
                  >
                    Upload
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ borderRadius: 4, background: '#F5F0FF', color: "#5A32A3", minHeight: '275px' }}>
              <CardContent sx={{ mx: 1 }}>
                <Typography variant='h6' fontWeight="700">Research fact:Learning vocabulary in English</Typography>
              </CardContent>
              <CardContent sx={{ mx: 1, textAlign: 'start' }}>
                <Typography variant='body2' >
                  <strong>Did you know: </strong>
                </Typography>
                <Typography variant='body2'>
                  If you learn only about <strong>2600</strong> words in English, you can <strong>read</strong> and <strong>understand</strong> around <strong>90%</strong> of all texts? Study these:
                </Typography>
                <Typography variant='body2'>
                  <strong>. 2,000</strong> most frequently used words
                </Typography>
                <Typography variant='body2'>
                  <strong>. 570</strong> most frequently used academic words
                </Typography>
              </CardContent>
              {/* <CardActions sx={{mx:1,mb:1,mt:5, justifyContent:"center"}}>
              </CardActions> */}
            </Card>
          </Grid>


          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ borderRadius: 4, background: '#F0FFF4', color: "#000", minHeight: '275px' }}>
              <CardContent sx={{ mx: 1 }}>
                <Typography fontWeight="700" variant='h6' sx={{ color: '#054F31' }}>Start Prediction</Typography>
                <Typography fontWeight="700" variant='h6' sx={{ color: '#054F31' }}>(Prediktor™ Wizard)</Typography>
              </CardContent>
              <CardContent sx={{ mx: 1 }}>
                <img src={playpause} />
              </CardContent>
              {/* <CardActions sx={{mx:1,mb:1, justifyContent:"center"}}>
                <Link to='/dashboard'>
                  <Button
                    variant="contained"
                    color='primary'
                    sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,}}
                  >
                    Continue
                  </Button>
                </Link>
              </CardActions> */}
              <CardActions sx={{ mx: 1, mb: 1, justifyContent: "center" }}>
                <Link to='/dashboard/at-a-glance'>
                  <Button
                    variant="contained"
                    color='primary'
                    sx={{ background: "#fff", color: "#000", textTransform: "none", borderRadius: 3, }}
                  >
                    Continue
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ borderRadius: 4, background: '#EDF1F5', color: "#277AFF", minHeight: '275px' }}>
              <CardContent sx={{ mx: 1 }}>
                <Typography fontWeight="700" variant='h6'>Progress bar</Typography>
              </CardContent>
              <CardContent sx={{ mx: 1 }}>
                <Typography variant='body2' sx={{ mb: 5 }}>
                  Next step is <strong>Prediktor™ Wizard</strong>
                </Typography>
                <img src={seekbar} style={{ width: '100%' }} />
              </CardContent>
              <CardActions sx={{ mx: 1, mb: 1, mt: 3, justifyContent: "center" }}>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card sx={{ borderRadius: 4, minHeight: '275px' }}>
              <CardContent sx={{ mx: 1 }}>
                <Box display="flex" flexDirection="row" sx={{ mx: 0 }}>
                  <Typography sx={{ mx: 0, pr: 1 }} fontWeight="700" variant='h6'>Forecasted language test score</Typography>
                  <IconButton
                    sx={{ mx: 0, px: 0, py: 0 }}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <InfoIcon />
                  </IconButton>
                </Box>
              </CardContent>
              <CardContent sx={{ mx: 1, }}>
                <img style={{ width: '90%' }} src={alltests} />
              </CardContent>
              {/* <CardActions sx={{mx:1,mb:1,mt:3.5, justifyContent:"center"}}>
              </CardActions> */}
            </Card>
          </Grid>

        </Grid>
      </Container>
    </ThemeProvider>
  );
}
