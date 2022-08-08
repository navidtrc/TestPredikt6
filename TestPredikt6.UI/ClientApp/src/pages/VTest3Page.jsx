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
import { useState } from "react";

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

export default function VTest3Page() {
  const Aux= (props)=>(props.children);
  const total=5;
  const [index, setIndex] = useState(0);
  const questions=[
    {q:['How big or small something is:','Place buses and trains go to:','Young man:'],options:['boy','rent','report','size','station','thing']},
    {q:['Information sent to people:','Men and women:','Place for working:'],options:['ear','gold','lake','letter','office','people']},
    {q:['Funny story:','Man or boy:','Something worn on your head:'],options:['fellow','hat','ice','joke','light','system']},
    {q:['Funny story:','Place with many trees:','Something that is not right:'],options:['date','forest','mistake','news','record','shop']},
    {q:['Person who lives nearby:','Things that are thrown away:','Type of clothing:'],options:['bar','conversion','rain','neighbor','rubbish','shirt']},
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
        ·• V-Test ({index+1} of {total}) •·
        </Typography>
        <Grid container spacing={2} sx={{mt:3,px:40, textAlign:'start',mb:40}}>
          {questions[index].q.map((item,index2)=>(
            <Aux>
              <Grid item xs={12}>
                <Typography variant='body2'>
                  {item}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {questions[index].options.map(item=>(
                  <Button
                    variant="contained"
                    size="small"
                    color='primary'
                    sx={{ background: "#fff", color: "#000", textTransform: "none", borderRadius: 3, mx: 0.5 }}
                  >
                    {item}
                  </Button>
                ))}
              </Grid>
            </Aux>))}
        </Grid>
        <Grid container spacing={2} sx={{mt:3}}>
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={3}>
            {index+1===total?
              <Link to='/dashboard/v-test-4'>
                <Button
                  variant="contained"
                  color='primary'
                  sx={{
                    textTransform: "none",
                  }}
                >
                  Finish
                </Button>
              </Link>:
              <Button
                onClick={()=>{setIndex((prevState => prevState+1));}}
                variant="contained"
                color='primary'
                sx={{
                  textTransform: "none",
                }}
              >
                Next
              </Button>
            }
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
