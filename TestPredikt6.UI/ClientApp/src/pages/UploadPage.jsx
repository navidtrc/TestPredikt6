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
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import playpause from '../assets/playpause.svg'
import seekbar from '../assets/seekbar.svg'
import alltests from '../assets/alltests.svg'
import step1 from '../assets/step1.svg'
import step2 from '../assets/step2.svg'
import step3 from '../assets/step3.svg'
import ielts from '../assets/ielts.svg'
import tofel from '../assets/tofel.svg'
import pearson from '../assets/pearson.svg'

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

export default function UploadPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3, mb:3}} component='h4' variant='h4'>
          Upload Official Test Results
        </Typography>
        <Grid container spacing={2} sx={{textAlign:"center"}}>
          <Grid item xs={4}>
            <Card sx={{borderRadius:4,background: '#fff',color:"#000", minHeight:'500px', textAlign:'start'}}>
              <CardContent sx={{mx:1}}>
                <img src={step1} style={{display:"block",width:"100%",marginBottom:"20px"}} />
                <Typography variant='h6' >
                  Step 1:
                </Typography>
                <Typography variant='body2'>
                  <strong>Scan / take a photo </strong>of your <strong>official language test results</strong>.
                </Typography>
                <Typography variant='body2'>
                  - IELTS: Test Results Form (TRF)
                </Typography>
                <Typography variant='body2'>
                  - TOEFL: Score Report
                </Typography>
                <Typography variant='body2'>
                  - PTE: Score Report
                </Typography>
                <Typography variant='body2'>
                  If you have been given a <strong>digital version</strong> of your results by the test provider, skip to <strong>Step 2</strong>.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{borderRadius:4,background: '#fff',color:"#000", minHeight:'500px', textAlign:'start'}}>
              <CardContent sx={{mx:1}}>
                <img src={step2} style={{display:"block",width:"100%"}}/>
                <Typography variant='h6'>
                  Step 2:
                </Typography>
                <Typography variant='body2'>
                  Upload your official test results.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{borderRadius:4,background: '#fff',color:"#000", minHeight:'500px', textAlign:'start'}}>
              <CardContent sx={{mx:1}}>
                <img src={step3} style={{display:"block",width:"100%",marginBottom:"40px"}}/>
                <Typography variant='h6'>
                  Step 3:
                </Typography>
                <Typography variant='body2'>
                  Upon verification by our team, you will receive a <strong>credit</strong> of <strong>$X.00</strong> toward future TestPredikt™ products.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <img src={ielts} style={{display:"block",width:"100%"}}/>
          </Grid>
          <Grid item xs={4}>
            <img src={tofel} style={{display:"block",width:"100%"}}/>
          </Grid>
          <Grid item xs={4}>
            <img src={pearson} style={{display:"block",width:"100%"}}/>
          </Grid>

        </Grid>
        <Grid container spacing={2} sx={{mt:3,mx:6, mb:3}}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard'>
              <Button
                variant="contained"
                color='primary'
                sx={{
                  textTransform: "none",
                }}
              >
                Return to dashboard
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
