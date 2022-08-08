import {
    Button,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Typography,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";
import examinationService from "../services/examination-service";

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

// const getCTestQuestion = () => {
//     debugger;
//     examinationService.getCTestQuestion();
// }

export default function CTest3Page() {

    const BlankInput = (props) => {
        // debugger;
        if (props.inputValue != undefined && props.inputValue != "") {
            let tempName = props.id;
            tempName = tempName.substring(tempName.indexOf("-") + 1);
            tempName = ANSWERSPREFIX + tempName;
            answers[tempName] = props.inputValue;
            // console.log(answers);
        }

        return (
            <input
                type="text"
                defaultValue={props.inputValue}
                size={props.size}
                maxLength={props.maxLength}
                id={props.id}
                style={{
                    background: "#ddd",
                    border: "none",
                }}

                onChange={(e) => {
                    // debugger;
                    e.preventDefault();
                    //find the related answer according to input id
                    let tempName = e.target.id.toString();
                    tempName = tempName.substring(tempName.indexOf("-") + 1);
                    tempName = ANSWERSPREFIX + tempName;
                    answers[tempName] = e.target.value;
                }}
            />
        );
    };


    //The character used as blank place
    const BLANKCHARACTER = "*";
    const INPUTNAME = "InputAnswerNo";
    const ANSWERSPREFIX = "ans";
    //holds the  answers
    var answers = new Object();

    const [paragraphsTextState, setParagraphsTextState] = useState([]);
    const [paragraphsTitleState, setParagraphsTitleState] = useState([]);
    const [paragraphsIdState, setParagraphsIdState] = useState([]);
    const [isLoaingState, setIsLoaingState] = useState(true);
    const [progressState, setProgressState] = useState(0);
    const [countState, setCountState] = useState(0);
    const [answersState, setAswersState] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // debugger;

                const { data: cTestData } = await examinationService.getCTestQuestion();

                const tempJson = JSON.parse(cTestData);

                //get paragraphs from api
                setParagraphsTextState(tempJson.questionText);
                setParagraphsIdState(tempJson.id);
                setParagraphsTitleState(tempJson.Title);

                setIsLoaingState(false);

                setCountState(tempJson.id.length);

                //generateEmptyAnswers(25);

            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    const nextStepOrPreviousStep = (e, kind) => {
        // debugger;
        e.preventDefault();

        //copy the answers into the state
        let tempAnswers = answersState.slice();
        tempAnswers[progressState] = answers;
        setAswersState(tempAnswers);

        // console.log(tempAnswers);

        let tempProgress = progressState;
        if (kind.toLowerCase() === "inc") {
            tempProgress++;
        }
        if (kind.toLowerCase() === "desc") {
            tempProgress--;
        }
        if (tempProgress < countState) {
            setProgressState(tempProgress);
        }
        if (tempProgress == countState) {
            // debugger;
            let tempParIds = paragraphsIdState;
            examinationService.sendCTestUserAnswer(tempParIds, tempAnswers)
                .then(() => {
                    navigate("/dashboard/c-test-4");
                }), (error) => { };
        }
    };

    const generateEmptyAnswers = (inputCounter) => {
        let tempObjectStr = "{";
        for (var i = 1; i <= inputCounter; i++) {
            tempObjectStr += `"${ANSWERSPREFIX}${i}":"" ,`;
        }
        tempObjectStr = tempObjectStr.substring(0, tempObjectStr.length - 1);
        tempObjectStr += "}";

        // debugger;

        answers = JSON.parse(tempObjectStr);
    }

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Typography sx={{ mt: 3 }} component='h4' variant='h4'>
                    {!isLoaingState && `·• C-Test (${progressState + 1}of${countState}) •·`}
                </Typography>
                <Grid container spacing={2} sx={{ mt: 3, px: 30, textAlign: 'start' }}>
                    <Grid item xs={12} sx={{ minHeight: "450px" }}>
                        {!isLoaingState && (
                            <>
                                <Typography type='text2' sx={{ textAlign: 'center', my: 2 }}>
                                    <strong>{paragraphsTitleState[progressState]}</strong>
                                </Typography>
                                {(() => {

                                    // console.log("answers", answers);
                                    let parChars = paragraphsTextState[progressState]; //It is a temp variable for looping
                                    let finalPar = ""; //The final value to show
                                    let blankCounter = 0; //The counter of blanks occured in each word
                                    let blankSeen = false; //It is true when first blank seen (in a word) and false when balnks are over (in a word)
                                    let typicalTextBuffer = ""; //It is used for characters other than blank and contatinate with blanks
                                    let inputCounter = 0;
                                    for (var i = 0; i < parChars.length; i++) {
                                        let tempChar = parChars.charAt(i);
                                        //the blank seen
                                        if (tempChar === BLANKCHARACTER) {
                                            blankCounter++;
                                            blankSeen = true;
                                        } else {
                                            blankSeen = false;
                                        }
                                        if (blankSeen == true) {
                                            //do nothing
                                            continue;
                                        }
                                        //blanks ended and the next character seen
                                        if (!blankSeen && blankCounter > 0) {
                                            // debugger;
                                            let tempt = answersState.length <= progressState
                                                ? "" : answersState[progressState]['ans' + inputCounter.toString()];

                                            //console.log(answers[ANSWERSPREFIX + (inputCounter - 1).toString()]);

                                            inputCounter++;

                                            let tempInputValue = "";
                                            if (answersState.length != undefined && answersState.length > progressState) {
                                                tempInputValue = answersState[progressState][ANSWERSPREFIX + inputCounter.toString()]

                                            }

                                            //create the jsx (dom element)
                                            finalPar = (
                                                <>
                                                    {finalPar} {typicalTextBuffer}
                                                    <BlankInput
                                                        size={blankCounter <= 3 ? 1 : blankCounter - 2}
                                                        maxLength={blankCounter}
                                                        id={`${INPUTNAME}${progressState}-${inputCounter}`}
                                                        inputValue={tempInputValue}
                                                    />
                                                </>
                                            );
                                            typicalTextBuffer = "";
                                            blankCounter = 0;
                                        }

                                        typicalTextBuffer += tempChar;
                                    }

                                    //add the remain of text after the last blank
                                    if (typicalTextBuffer.length > 0) {
                                        finalPar = (
                                            <>
                                                {finalPar} {typicalTextBuffer}
                                            </>
                                        );
                                    }

                                    generateEmptyAnswers(inputCounter);

                                    const retVal = (
                                        <Typography variant="body2"> {finalPar}</Typography>
                                    );
                                    return retVal;
                                })()}
                            </>
                        )}


                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={7}>
                    </Grid>
                    <Grid item xs={2.5}>
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
                                Save & return to dashboard
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2.5}>
                        {/* <Link to='/dashboard/c-test-4'> */}
                        <Button
                            onClick={(e) => { nextStepOrPreviousStep(e, "inc"); }}
                            variant="contained"
                            color='primary'
                            sx={{
                                textTransform: "none",
                            }}
                        >
                            {progressState >= countState - 1 ? "Save" : "Next"}
                        </Button>

                        <Button
                            onClick={(e) => { nextStepOrPreviousStep(e, "desc"); }}
                            variant="contained"
                            color='primary'
                            sx={{
                                textTransform: "none",
                            }}
                        >
                            Prev
                        </Button>
                        {/* </Link> */}
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
