import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
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

export default function ContactPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card sx={{ borderRadius: "15px", mt: "75px" }} variant="outlined">
          <CardContent>

              <Box
                component="form"
                sx={{ mt: 1, }}
              >
                <Typography component="h1" variant="h5">
                  Contact
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "start", mt: 3, mx:1 }}
                >
                  You may contact us via:
                </Typography>
                <Typography variant="body2"
                            sx={{ textAlign: "start", mx:3, pb:6 }}>
                  <li>Email: Rohamgames@gmail.com</li>
                  <li>Tex: +98 938 368 44 14</li>
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
            
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
