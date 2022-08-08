import {
    Box,
    Button,
    Checkbox,
    Container,
    createTheme,
    CssBaseline,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import map from "../assets/map.svg";
import { useState } from "react";
import examinationService from "../services/examination-service";

import SecondAppBar from '../components/SecondAppBar';
import WizardComponent from '../components/WizardComponent';

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

export default function PrediktorWizardPage() {
    const [checkedState, setCheckedState] = useState(false);
    const [progressState, setProgressState] = useState(0);
    const selectedButtonBackgroundColor = "#1565c0";
    const unselectedButtonBackgroundColor = "#E5E5E5";

    const [yearState, setYearState] = useState();
    const [countryState, setCountryState] = useState();
    const [genderState, setGenderState] = useState();
    const [employmentState, setEmploymentState] = useState();
    const [industryState, setIndustryState] = useState();
    const [positionState, setPositionState] = useState();

    const navigate = useNavigate();

    const startExam = (e) => {
        if (checkedState === false) {
            setProgressState(1);
            return;
        }

        e.preventDefault();
        examinationService.startExam().then(() => {
            //   navigate("/dashboard/prediktor-wizard-2");
            setProgressState(1);
        }),
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            };
    };

    const sendPTest = (e) => {
        e.preventDefault();
        examinationService.sendPTest(
            yearState,
            countryState,
            genderState,
            employmentState,
            industryState,
            positionState
        ).then(() => {
            setProgressState(2);
            // navigate("/dashboard/prediktor-wizard-3");
        }), (error) => { };
    };

    return (
        <ThemeProvider theme={theme}>
            <SecondAppBar title="·• Prediktor™ Wizard •·"></SecondAppBar>
            <WizardComponent step="2"></WizardComponent>
            <Container component="main" maxWidth={progressState === 2 ? "xs" : "lg"}>
                <CssBaseline />

                {progressState === 0 ? (
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid item xs={12} sx={{ minHeight: "500px" }}>
                            [DESCRIPTION]
                        </Grid>
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
                                    Back to dashboard
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={4}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={(e) => {
                                                setCheckedState(e.target.checked);
                                            }}
                                        />
                                    }
                                    label="I am now ready to take the Prediktor™ Wizard"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={3}>
                            {/*<Link to='/dashboard/prediktor-wizard-2'>*/}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={startExam}
                                type="submit"
                                sx={{
                                    textTransform: "none",
                                }}
                            >
                                Start Prediktor™ Wizard
                            </Button>
                            {/*</Link>*/}
                        </Grid>
                    </Grid>
                ) : null}

                {progressState === 1 ? (
                    <>
                        <Box sx={{ maxWidth: "400px", textAlign: "start", mx: 18 }}>
                            <Grid container spacing={2} sx={{ mt: 3, mx: 6 }}>
                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        1. Which year were you born?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: "200px" }}>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={yearState}
                                            label="Age"
                                            onChange={(e) => {
                                                setYearState(e.target.value);
                                            }}
                                        >
                                            <MenuItem value={2021}>2021</MenuItem>
                                            <MenuItem value={2020}>2020</MenuItem>
                                            <MenuItem value={2019}>2019</MenuItem>
                                            <MenuItem value={2018}>2018</MenuItem>
                                            <MenuItem value={2017}>2017</MenuItem>
                                            <MenuItem value={2016}>2016</MenuItem>
                                            <MenuItem value={2015}>2015</MenuItem>
                                            <MenuItem value={2014}>2014</MenuItem>
                                            <MenuItem value={2013}>2013</MenuItem>
                                            <MenuItem value={2012}>2012</MenuItem>
                                            <MenuItem value={2011}>2011</MenuItem>
                                            <MenuItem value={2009}>2009</MenuItem>
                                            <MenuItem value={2008}>2008</MenuItem>
                                            <MenuItem value={2007}>2007</MenuItem>
                                            <MenuItem value={2006}>2006</MenuItem>
                                            <MenuItem value={2005}>2005</MenuItem>
                                            <MenuItem value={2004}>2004</MenuItem>
                                            <MenuItem value={2003}>2003</MenuItem>
                                            <MenuItem value={2002}>2002</MenuItem>
                                            <MenuItem value={2001}>2001</MenuItem>
                                            <MenuItem value={2000}>2000</MenuItem>
                                            <MenuItem value={1999}>1999</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        2. What country are you currently living in?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={1}
                                        value={countryState}
                                        onClick={(e) => {
                                            //debugger;
                                            setCountryState(e.target.id);
                                            console.log(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                countryState == 1
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Canada
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={2}
                                        onClick={(e) => {
                                            setCountryState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                countryState == 2
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Bangladesh
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={3}
                                        onClick={(e) => {
                                            setCountryState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                countryState == 3
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Japan
                                    </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        3. What is your gender?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={1}
                                        onClick={(e) => {
                                            setGenderState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                genderState == 1
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Male
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={2}
                                        onClick={(e) => {
                                            setGenderState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                genderState == 2
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Female
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={3}
                                        onClick={(e) => {
                                            setGenderState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                genderState == 3
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Non-binary
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={4}
                                        onClick={(e) => {
                                            setGenderState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                genderState == 4
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Other
                                    </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        4. What is your current employment status?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={1}
                                        onClick={(e) => {
                                            setEmploymentState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                employmentState == 1
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Full-time
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={2}
                                        onClick={(e) => {
                                            setEmploymentState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                employmentState == 2
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Part-time
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={3}
                                        onClick={(e) => {
                                            setEmploymentState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                employmentState == 3
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Unemployed
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        id={4}
                                        onClick={(e) => {
                                            setEmploymentState(e.target.id);
                                        }}
                                        sx={{
                                            background:
                                                employmentState == 4
                                                    ? selectedButtonBackgroundColor
                                                    : unselectedButtonBackgroundColor,
                                            color: "#000",
                                            textTransform: "none",
                                            borderRadius: 4,
                                            mx: 1,
                                        }}
                                    >
                                        Retired
                                    </Button>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        5. What industry are you currently working in?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: "200px" }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Industry
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={industryState}
                                            onClick={(e) => {
                                                setIndustryState(e.target.dataset.value);
                                            }}
                                            label="Industry"
                                        >
                                            <MenuItem value={1}>Agriculture</MenuItem>
                                            <MenuItem value={2}>IT</MenuItem>
                                            <MenuItem value={3}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        6. What is your current employment position?
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ width: "200px" }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Employment Position
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={positionState}
                                            onClick={(e) => {
                                                setPositionState(e.target.dataset.value);
                                            }}
                                            label="Employment Position"
                                        >
                                            <MenuItem value={1}>Intern</MenuItem>
                                            <MenuItem value={2}>Junior</MenuItem>
                                            <MenuItem value={3}>Senior</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={2} sx={{ mt: 3, mx: 6, mb: 3 }}>
                            <Grid item xs={3}>
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
                                        Back to dashboard
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={3}>
                                {/*<Link to='/dashboard/prediktor-wizard-3'>*/}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={sendPTest}
                                    type="submit"
                                    sx={{
                                        textTransform: "none",
                                    }}
                                >
                                    Confirm & next step
                                </Button>
                                {/*</Link>*/}
                            </Grid>
                        </Grid>
                    </>
                ) : null}

                {progressState === 2 ? (
                    <Box sx={{ maxWidth: "600px", textAlign: "start" }}>
                        <Grid container spacing={2} sx={{ mt: 3, mx: 6 }}>
                            <Grid item xs={12}>
                                <Typography variant="body2">
                                    Submitted! Now it is time for the C-Test
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to="/dashboard/c-test">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            textTransform: "none"
                                        }}
                                    >
                                        Continue
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                ) : null}
            </Container>
        </ThemeProvider>
    );
}
