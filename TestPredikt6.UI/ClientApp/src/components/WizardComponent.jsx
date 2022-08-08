import {
  Typography,
  Stack,
  Box,
  Button,
  createTheme
} from "@mui/material";
import React, { Component } from 'react';
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const CircleButton = styled(Button)(() => ({ fontWeight: 700, padding: "0px 9px", marginRight: 5, borderRadius: 28, minWidth: "auto", whiteSpace: "nowrap", }));

const theme = createTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    secondary: {
      main: "#7f7f7f",
    },
  },
});

class WizardComponent extends Component {
  render() {
    const step = this.props.step;
    const secondary = "#7f7f7f";
    var steps = ["secondary", "secondary", "secondary", "secondary", "secondary"];
    if (step == 1) {
      steps = ["primary", "secondary", "secondary", "secondary", "secondary"];
    }
    else if (step == 2) {
      steps = ["primary", "primary", "secondary", "secondary", "secondary"];
    }
    else if (step == 3) {
      steps = ["primary", "primary", "primary", "secondary", "secondary"];
    }
    else if (step == 4) {
      steps = ["primary", "primary", "primary", "primary", "secondary"];
    }
    else if (step == 5) {
      steps = ["primary", "primary", "primary", "primary", "primary"];
    }

    return (
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={1} sx={{ overflow: 'auto', mt: 1, pb: 2, mx: 2 }} justifyContent="space-evenly" alignItems="center">
          <Box><CircleButton variant="contained" color={steps[0]} >1</CircleButton>Pay</Box>
          <Box><CircleButton variant="contained" color={steps[1]} >2</CircleButton>Prediktor™ Wizard</Box>
          <Box><CircleButton variant="contained" color={steps[2]} >3</CircleButton>C-Test</Box>
          <Box><CircleButton variant="contained" color={steps[3]} >4</CircleButton>V-Test</Box>
          <Box><CircleButton variant="contained" color={steps[4]} >5</CircleButton>Your predicted test score</Box>
        </Stack>
      </ThemeProvider>
    )
  }
}

export default WizardComponent;