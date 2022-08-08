import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

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

export default function TestimonialsPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card sx={{ borderRadius: "15px", mt: "75px" }} variant="outlined">
          <CardContent>
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                sx={{ mt: 1, }}
              >
                <Typography component="h1" variant="h5">
                  Testimonials
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "start", mt: 3, mx:1 }}
                >
                  "I've been able to prepare myself for an english test exam by predicting my score using TestPredikt"
                </Typography>
                <Typography component='p' variant='bold' sx={{ textAlign:"start", mt: 3, mx:1, mb:8 }}>
                  --Jessica (from Munich)
                </Typography>

                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={2.5}>
                    <Link to='/'>
                    <Button
                      variant="contained"
                      color='primary'
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      Back
                    </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
