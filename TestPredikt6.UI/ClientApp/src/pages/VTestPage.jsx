import {
  Box,
  Button,
  Card, CardActions,
  CardContent, CardHeader, Checkbox,
  Container,
  createTheme,
  CssBaseline, FormControlLabel, FormGroup,
  Grid, IconButton, Tooltip,
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

function DeleteIcon() {
  return null;
}

export default function VTestPage() {
  const EmptyPlace = (props)=>{
    let spaces='';
    for(let i=0;i<props.length;i++){
      spaces += "  ";
    }
    return (<span style={{whiteSpace: "pre",background:'#ddd'}}>{spaces}</span>)
  }
  const HelpToolTip = (props) => {
    return (<Tooltip title={props.title} open={true}><span/></Tooltip>)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
        ·• V-Test (Readme) •·
        </Typography>
        <Grid container spacing={2} sx={{mt:3,px:30}}>
          <Grid item xs={12} sx={{minHeight:"450px"}}>
            <Typography variant='body2'>
              This is a test that looks at how well you know useful English words. Select the circle button under the word that goes with each meaning.
            </Typography>
            <Typography variant='body2'>
              V-Test will take approximately 20 minutes to complete per set. Once you begin the test, you may choose to leave the test at any time, but you will <strong>lose any progress made throughout the test</strong>.
            </Typography>
            <Typography variant='body2' sx={{mt:3}}>
              <strong>
                Press “Get Started” to continue.
              </strong>
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
          <Grid item xs={7}>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard/v-test-2'>
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
