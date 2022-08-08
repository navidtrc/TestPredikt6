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
  AppBar
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

export default function FAQPage() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" elevation={0} sx={{ px: 0, py: 1, position: "relative", background: "white", color: "black", boxShadow: 1 }}>
        <Typography fontSize="36px" fontWeight="300">
          ·• FAQs •·
        </Typography>
      </AppBar>
      <Container component="main" maxWidth="sm">
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

                {/* QA ################################################################# */}
                <Typography variant="body2" sx={{ textAlign: "start", mt: 3, mx: 1 }} >
                  <strong>Question: </strong>
                  How to reset my progress?
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "start", mt: 3, mx: 1, mb: 5 }} >
                  <strong>Answer: </strong>
                  You cannot reset your progress on your side. If you really want to start from scratch, contact our support team and have them reset your scores.
                </Typography>

                {/* QA ################################################################# */}
                <Typography variant="body2" sx={{ textAlign: "start", mt: 3, mx: 1 }} >
                  <strong>Question: </strong>
                  How to reset my password?
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "start", mt: 3, mx: 1, mb: 5 }} >
                  <strong>Answer: </strong>
                  Before logging into TestPredikt, there is a Reset Password button. Type your email address and follow the instructions.
                </Typography>

                {/* QA ################################################################# */}
                <Typography variant="body2" sx={{ textAlign: "start", mt: 3, mx: 1 }} >
                  <strong>Question: </strong>
                  I’ve just completed my  TestPredikt™ prediction. Can I do another one?
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "start", mt: 3, mx: 1, mb: 5 }} >
                  <strong>Answer: </strong>
                  Our Prediktor ™ system provides 1 prediction for each payment. Because language skills take time to improve, we recommend you wait at least 1 month before getting another prediction.
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
