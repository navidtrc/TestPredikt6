import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import map from "../assets/map.svg";
import { useState, useEffect, useCallback } from "react";
import examinationService from "../services/examination-service";
const theme = createTheme({
  typography: {
    fontFamily: [
      "Fira Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function DeleteIcon() {
  return null;
}

export default function CTest2Page() {

  const [checkedState, setCheckedState] = useState(false);
  const navigate = useNavigate();


  const startCTest = (e) => {
    if (checkedState === false) {
      return;
    }
    e.preventDefault();
    examinationService.startCTest().then(() => {

      navigate("/dashboard/c-test-3");
    });
  };


  const EmptyPlace = (props) => {
    let spaces = "";
    for (let i = 0; i < props.length; i++) {
      spaces += "  ";
    }
    let inputWidth = 13 * props.length + "px";
    //return (<span style={{whiteSpace: "pre",background:'#ddd'}}>{spaces}</span>)
    return (
      <input
        type="text"
        /*size={props.length}*/ maxLength={props.length}
        style={{ background: "#ddd", border: "none", width: `${inputWidth}` }}
      />
    );
  };
  // const HelpToolTip = (props) => {
  //   return (
  //     <Tooltip title={props.title} open={true}>
  //       <span />
  //     </Tooltip>
  //   );
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography sx={{ mt: 3 }} component="h4" variant="h4">
          ·• C-Test (Example) •·
        </Typography>
        <Grid container spacing={2} sx={{ mt: 3, px: 30, textAlign: "start" }}>
          <Grid item xs={12} sx={{ minHeight: "450px" }}>
            <Typography variant="body2">
              Millions of children in the United States go to summer camp. Some
              g
              <EmptyPlace length={2} /> to play outdoors a
              <EmptyPlace length={1} /> traditional c<EmptyPlace length={4} />{" "}
              in t<EmptyPlace length={2} /> woods, i<EmptyPlace length={1} />{" "}
              the moun
              <EmptyPlace length={5} /> or o<EmptyPlace length={1} /> a la
              <EmptyPlace length={2} />. But fami
              <EmptyPlace length={4} /> now ha
              <EmptyPlace length={2} /> many cho
              <EmptyPlace length={4} /> of spec
              <EmptyPlace length={5} /> camps. Th
              <EmptyPlace length={3} /> can b<EmptyPlace length={1} /> in t
              <EmptyPlace length={2} /> middle o<EmptyPlace length={1} /> nature
              o<EmptyPlace length={1} /> a b<EmptyPlace length={2} /> city. Spec
              <EmptyPlace length={5} /> camps off
              <EmptyPlace length={2} /> young peo
              <EmptyPlace length={3} /> the cha
              <EmptyPlace length={3} /> to le
              <EmptyPlace length={3} /> about diff
              <EmptyPlace length={5} /> subjects. Anything from space
              exploration to business to medicine.
            </Typography>
            <Typography sx={{ mt: 5, textAlign: "center" }}>
              <strong>Solution</strong>
            </Typography>

            <Typography variant="body2">
              Millions of children in the United States go to summer camp. Some
              go to play outdoors at traditional camps in the woods, in the
              mountains or on a lake. But families now have many choices of
              specialty camps. These can be in the middle of nature or a big
              city. Specialty camps offer young people the chance to learn about
              different subjects. Anything from space exploration to business to
              medicine.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={2}>
            <Link to="/dashboard">
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  color: "#000",
                  background: "#fff",
                  textTransform: "none",
                }}>
                Back to dashboard
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3.5}></Grid>
          <Grid item xs={3.5}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => {
                      setCheckedState(e.target.checked);
                    }}
                  />
                }
                label="I am now ready to take the C-Test" />
            </FormGroup>
          </Grid>
          <Grid item xs={3}>
            {/* <Link to='/dashboard/c-test-3'> */}
            <Button
              variant="contained"
              color="primary"
              onClick={startCTest}
              type="submit"
              sx={{
                textTransform: "none",
              }}>
              Start C-Test
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
