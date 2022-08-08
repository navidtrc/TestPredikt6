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

export default function VTest2Page() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{mt:3}} component='h4' variant='h4'>
        ·• V-Test (Example) •·
        </Typography>
        <Grid container spacing={2} sx={{mt:3,px:40, textAlign:'start',mb:40}}>
          <Grid item xs={12}>
            <Typography variant='body2'>
              Land with water all around it:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              game
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              island
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              mouth
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              movie
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              song
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              yard
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='body2'>
              Part of your body used for eating and talking:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              game
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              island
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              mouth
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              movie
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              song
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              yard
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant='body2'>
              Piece of music:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              game
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              island
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              mouth
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              movie
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              song
            </Button>
            <Button
              variant="contained"
              size="small"
              color='primary'
              sx={{background:"#fff",color:"#000",textTransform:"none",borderRadius:3,mx:0.5}}
            >
              yard
            </Button>
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
          <Grid item xs={3.5}>
          </Grid>
          <Grid item xs={3.5}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="I am now ready to take the V-Test" />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            <Link to='/dashboard/v-test-3'>
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
