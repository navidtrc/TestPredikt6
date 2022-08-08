import {
  Box,
  Button,
  Card,
  CardContent, CardHeader,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

import svg1 from '../assets/mainmenuhead1.svg';
import svg2 from '../assets/mainmenubody1.svg';
import svg3 from '../assets/mainmenubody2.svg';
import svg4 from '../assets/mainmenubody3.svg';

import { styled } from '@mui/material/styles';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LandingPage() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='landing-head' />
      <Container component="main"  >
        <CssBaseline />
        <Grid container sx={{ my: 20 }} columns={{ xs: 4, sm: 6, md: 12 }}>
          <Grid item xs={6} sx={{ textAlign: 'start', mt: 10 }}>
            <Typography component='h5' variant='h5' sx={{ fontWeight: 1000 }}>
              Predict your language test score before you take the test.
            </Typography>
            <Typography component='h5' variant='h6'>
              Save a lot of your time. And a lot of your money.
            </Typography>
            <Link to='/register'>
              <Button
                sx={{ mt: 3 }}
                variant="contained"
                color='primary'
              >
                Sign Up
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6}>

            <img src={svg1} style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ my: 30 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} >
            <img src={svg2} style={{ width: "100%", height: "225px" }} />
            <Card sx={{ borderRadius: 4, background: '#277AFF', color: "#FFF", minHeight: '220px' }}>
              <CardHeader sx={{ boxShadow: 3, background: "#5AA5FF" }} title='Why TestPredikt?' />
              <CardContent>
                Join our international team of language teaching experts.
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon style={{ fill: "white" }} />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph sx={{ fontWeight: 'bold' }}>Fact</Typography>
                  <Typography paragraph>
                    Research shows the average test-taker needs 3 attempts at IELTS to achieve the necessary score.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <img src={svg3} style={{ width: "100%", height: "225px" }} />
            <Card sx={{ borderRadius: 4, background: '#15B79B', color: "#FFF", minHeight: '220px' }}>
              <CardHeader sx={{ boxShadow: 3, background: "#0D7160" }} title='Why is there a -k in Predikt?' />
              <CardContent>
                Don’t worry - we’re linguists, and we know how to spell. :D
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded2}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label="show more"
                >
                  <ExpandMoreIcon style={{ fill: "white" }} />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph sx={{ fontWeight: 'bold' }}>Fact</Typography>
                  <Typography paragraph>
                    Globally, the average cost of 1 IELTS test is $250 USD. The average test-taker might therefore spend $750 USD.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <img src={svg4} style={{ width: "100%", height: "225px" }} />
            <Card sx={{ borderRadius: 4, background: '#3380CC', color: "#FFF", minHeight: '220px' }}>
              <CardHeader sx={{ boxShadow: 3, background: "#245A90" }} title='Pricing' />
              <CardContent >
                Less than 12% of the price of an official English test.
                1 TestPredikt™ prediction = $29.99
                1 official IELTS test = $250.00
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded3}
                  onClick={handleExpandClick3}
                  aria-expanded={expanded3}
                  aria-label="show more"
                >
                  <ExpandMoreIcon style={{ fill: "white" }} />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded3} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography paragraph>
                    Globally, the average cost of 1 IELTS test is $250 USD. The average test-taker might therefore spend $750 USD.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
        <Grid sx={{ mb: 40 }} />
        <Grid>
          <Typography component='h6' variant='h6'>
            TestPredikt™
          </Typography>
          <Typography component='p' variant='body2'>
            © 2022 TestPredikt – All rights reserved. Made with ♡️ in beautiful Alberta, Canada
          </Typography>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
