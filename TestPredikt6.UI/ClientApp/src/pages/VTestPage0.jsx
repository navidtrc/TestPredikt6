import { useState, useEffect } from "react";
import {
  Aux,
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import map from "../assets/map.svg";
import examinationService from "../services/examination-service";
import { FmdGood, Group } from "@mui/icons-material";

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

function Question({ data, group }) {
  return (
    <div>
      <Grid item xs={12}>
        <Typography variant="body2">
          {data.data[group].questions[0].questionText}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[0].option1}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[0].option2}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[0].option3}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[0].option4}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          {data.data[group].questions[1].questionText}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[1].option1}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[1].option2}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[1].option3}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            background: "#fff",
            color: "#000",
            textTransform: "none",
            borderRadius: 3,
            mx: 0.5,
          }}
        >
          {data.data[group].questions[1].option4}
        </Button>
      </Grid>
      <br />
    </div>
  );
}

export default function VTestPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: vTestData } = await examinationService.getVTestQuestion();
        setData(vTestData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const EmptyPlace = (props) => {
    let spaces = "";
    for (let i = 0; i < props.length; i++) {
      spaces += "  ";
    }
    return (
      <span style={{ whiteSpace: "pre", background: "#ddd" }}>{spaces}</span>
    );
  };
  const HelpToolTip = (props) => {
    return (
      <Tooltip title={props.title} open={true}>
        <span />
      </Tooltip>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />

        {step === 0 ? (
          <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test (Readme) •·
            </Typography>
            <Grid container spacing={2} sx={{ mt: 3, px: 30 }}>
              <Grid item xs={12} sx={{ minHeight: "450px" }}>
                <Typography variant="body2">
                  This is a test that looks at how well you know useful English
                  words. Select the circle button under the word that goes with
                  each meaning.
                </Typography>
                <Typography variant="body2">
                  V-Test will take approximately 20 minutes to complete per set.
                  Once you begin the test, you may choose to leave the test at
                  any time, but you will{" "}
                  <strong>lose any progress made throughout the test</strong>.
                </Typography>
                <Typography variant="body2" sx={{ mt: 3 }}>
                  <strong>Press “Get Started” to continue.</strong>
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
                    }}
                  >
                    Return to dashboard
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={7}></Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setStep((step) => step + 1);
                  }}
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </>
        ) : null}
        {step === 1 ? (
          <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test (Example) •·
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ mt: 3, px: 40, textAlign: "start" }}
            >
              <Grid item xs={12}>
                <Typography variant="body2">
                  Land with water all around it:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  game
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  island
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  mouth
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  movie
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  song
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  yard
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2">
                  Part of your body used for eating and talking:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  game
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  island
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  mouth
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  movie
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  song
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  yard
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2">Piece of music:</Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  game
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  island
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  mouth
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  movie
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  song
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{
                    background: "#fff",
                    color: "#000",
                    textTransform: "none",
                    borderRadius: 3,
                    mx: 0.5,
                  }}
                >
                  yard
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={2}>
                <Button
                  onClick={() => {
                    setStep((step) => step - 1);
                  }}
                  variant="outlined"
                  color="primary"
                  sx={{
                    color: "#000",
                    background: "#fff",
                    textTransform: "none",
                  }}
                >
                  Back
                </Button>
              </Grid>
              <Grid item xs={3.5}></Grid>
              <Grid item xs={3.5}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I am now ready to take the V-Test"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setStep((step) => step + 1);
                  }}
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </>
        ) : null}
        {step === 2 ? (
          <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test ({step - 1} of 5) •·
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ mt: 3, px: 40, textAlign: "start" }}
            >
              <Question data={data} group={0} />
              <Question data={data} group={1} />
              <Question data={data} group={2} />
              <Question data={data} group={3} />
              <Question data={data} group={4} />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setStep((prevState) => prevState + 1);
                  }}
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  {step < 7 ? "Next" : "Finish"}
                </Button>
              </Grid>
            </Grid>
          </>
        ) : null}
        {step === 3 ? (
          <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test ({step - 1} of 5) •·
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ mt: 3, px: 40, textAlign: "start" }}
            >
              <Question data={data} group={5} />
              <Question data={data} group={6} />
              <Question data={data} group={7} />
              <Question data={data} group={8} />
              <Question data={data} group={9} />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setStep((prevState) => prevState + 1);
                  }}
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  {step < 7 ? "Next" : "Finish"}
                </Button>
              </Grid>
            </Grid>
          </>
        ) : null}
        {step === 4 ? <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test ({step - 1} of 5) •·
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ mt: 3, px: 40, textAlign: "start" }}
            >
              <Question data={data} group={10} />
              <Question data={data} group={11} />
              <Question data={data} group={12} />
              <Question data={data} group={13} />
              <Question data={data} group={14} />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setStep((prevState) => prevState + 1);
                  }}
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  {step < 7 ? "Next" : "Finish"}
                </Button>
              </Grid>
            </Grid>
          </> : null}
        {step === 5 ? <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test ({step - 1} of 5) •·
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ mt: 3, px: 40, textAlign: "start" }}
            >
              <Question data={data} group={15} />
              <Question data={data} group={16} />
              <Question data={data} group={17} />
              <Question data={data} group={18} />
              <Question data={data} group={19} />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setStep((prevState) => prevState + 1);
                  }}
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  {step < 6 ? "Next" : "Finish"}
                </Button>
              </Grid>
            </Grid>
          </> : null}
        {step === 6 ? <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test ({step - 1} of 5) •·
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ mt: 3, px: 40, textAlign: "start"}}
            >
              <Question data={data} group={20} />
              <Question data={data} group={21} />
              <Question data={data} group={22} />
              <Question data={data} group={23} />
              <Question data={data} group={24} />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => {
                    setStep((prevState) => prevState + 1);
                  }}
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  {step < 7 ? "Next" : "Finish"}
                </Button>
              </Grid>
            </Grid>
          </> : null}
        {step === 7 ? (
          <>
            <Typography sx={{ mt: 3 }} component="h4" variant="h4">
              ·• V-Test •·
            </Typography>
            <Box sx={{ maxWidth: "600px", textAlign: "start" }}>
              <Grid container spacing={2} sx={{ mt: 3, mx: 6 }}>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Submitted! Now it is time for the Results
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/dashboard">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      Continue
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </>
        ) : null}
      </Container>
    </ThemeProvider>
  );
}
