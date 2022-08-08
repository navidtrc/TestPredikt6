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
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";

import svgunhappy from '../assets/sentiment_dissatisfied.svg';
import svghappy from '../assets/sentiment_satisfied.svg';



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

export default function TalkToUsPage() {
  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="sm" >
        <CssBaseline />
        <Grid textAlign={"start"} >
          <Typography sx={{ mt: 3, mb: 3 }} >
            Let us know whether you like this product or not, and why.
          </Typography>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "flex", sm: "flex" },
            }}
          >

            <img src={svghappy} style={{ margin: "20px" }} />
            <img src={svgunhappy} style={{ margin: "20px" }} />



          </Box>
          <TextField id="email" label="Email: [OPTIONAL]" variant="outlined" sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "flex" }
          }} />
          <Typography sx={{ mt: 3, mb: 3 }} >
            If you would like us to respond to your feedback, plese provide your email.
          </Typography>
          <TextField id="description" label="Description here... [OPTIONAL]" variant="outlined" multiline minRows={8}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex" }
            }} />
        </Grid >
      </Container>
    </ThemeProvider >
  );
}
