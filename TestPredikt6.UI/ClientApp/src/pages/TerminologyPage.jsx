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
  Stack,
  AppBar
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
      },
    },
  },
});

export default function TerminologyPage() {
  const [flag, setflag] = useState(1);
  const selectedButtonBackgroundColor = "#277AFF";
  const unselectedButtonBackgroundColor = "#E5E5E5";


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" elevation={0} sx={{ px: 0, py: 1, position: "relative", background: "white", color: "black", boxShadow: 1 }}>
        <Typography fontSize="36px" fontWeight="300">
          ·• TestPredikt Terminology •·
        </Typography>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Stack direction="row" spacing={1} sx={{ overflow: 'auto', mt: 4, pb: 2, mx: 0 }} justifyContent="center" alignItems="center">
          <Button onClick={() => setflag(1)}
            // label="TestPredikt™?"
            variant="contained"
            // color="black"
            sx={{
              color: flag == 1 ? "white" : "black",
              background:
                flag == 1
                  ? selectedButtonBackgroundColor
                  : unselectedButtonBackgroundColor,
              borderRadius: 28,
              minWidth: "auto",
              whiteSpace: "nowrap"
            }}>TestPredikt™?
          </Button>
          <Button onClick={() => setflag(2)}
            label="Prediktor™ Wizard?"
            variant="contained"
            // color="primary"
            sx={{
              color: flag == 2 ? "white" : "black",
              background:
                flag == 2
                  ? selectedButtonBackgroundColor
                  : unselectedButtonBackgroundColor,
              borderRadius: 28,
              minWidth: "auto",
              whiteSpace: "nowrap"
            }}>Prediktor™ Wizard?
          </Button>
          <Button onClick={() => setflag(3)}
            label="C-Test?"
            variant="contained"
            // color="primary"
            sx={{
              color: flag == 3 ? "white" : "black",
              background:
                flag == 3
                  ? selectedButtonBackgroundColor
                  : unselectedButtonBackgroundColor,
              borderRadius: 28,
              minWidth: "auto",
              whiteSpace: "nowrap"
            }}>C-Test?
          </Button>
          <Button onClick={() => setflag(4)}
            label="V-Test?"
            variant="contained"
            // color="primary"
            sx={{
              color: flag == 4 ? "white" : "black",
              background:
                flag == 4
                  ? selectedButtonBackgroundColor
                  : unselectedButtonBackgroundColor,
              borderRadius: 28,
              minWidth: "auto",
              whiteSpace: "nowrap"
            }}>V-Test?
          </Button>
        </Stack>
        {flag == 1 &&
          <Card sx={{ borderRadius: "15px", mt: 2 }} variant="outlined" >
            <CardContent >

              <Box
                component="form"
                sx={{ mt: 1, }}
                visibility="visible"
              >
                <Typography component="h1" variant="h5" sx={{ textAlign: "start" }}>
                  What is TestPredikt™?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  drawing upon research-driven insights in artificial intelligence, machine learning and applied linguistics, TestPredikt™ is able to compare language test scales and results across large population datasets, in order to forecast your test score. Using our innovative technology, TestPredikt™ will recommend the language test likely to produce the highest score for you, and then provide a Prediktor™ forecast score on that recommended test.  With a scientifically forecast score, you can make an informed decision on whether you should sit for the test now, or spend more time studying.  The more you share with us, the more accurate our Prediktor™ system will forecast your language test results. But it’s always up to you: your data, your control, your choice.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  As more and more test-takers utilize TestPredikt™, our Prediktor™ model is continually updated to strengthen our forecasts even further.
                </Typography>
                <Typography component='p' variant='body2' sx={{ textAlign: "justify", mt: 3, mx: 1, mb: 8 }}>
                  The IELTS logo is the exclusive property of the British Council, IDP, IELTS Australia and Cambridge Assessment. The ETS TOEFL logo is the exclusive property of the Educational Testing Service (ETS). The Pearson PTE logo is the exclusive property of the Pearson Education Limited. The CELPIP logo is the exclusive property of Paragon Testing Enterprises. TestPredikit™ is not in way affiliated with these, or any other testing organization, and TestPredikt™ receives no compensation of any kind for recommending these or any other language test.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        }

        {flag == 2 &&
          <Card sx={{ borderRadius: "15px", mt: 2 }} variant="outlined" >
            <CardContent >

              <Box
                component="form"
                sx={{ mt: 1, }}
                visibility="visible"
              >
                <Typography component="h1" variant="h5" sx={{ textAlign: "start" }}>
                  What is the Prediktor™ Wizard?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  Research shows that many factors, <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>other</Box> than language ability, affect language test scores. The TestPredikt™ research team has analyzed large datasets on language test performance using cutting edge machine learning technologies, and has identified key factors which are strong predictors of language test scores. The Prediktor™ Wizard will ask you a few background questions, and your answers to these, along with your results on two mini-tests of language ability, will guide the Prediktor™ in accurately forecasting your language test score.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  <strong>Q:</strong> Do I have to answer all of the questions asked by the Prediktor™ Wizard?  —Arif, India
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  <strong>A:</strong> How much you share is always your choice. However, the more questions you answer, the more accurate our prediction of your language test score.
                </Typography>


              </Box>



            </CardContent>

          </Card>
        }

        {flag == 3 &&
          <Card sx={{ borderRadius: "15px", mt: 2 }} variant="outlined" >
            <CardContent >

              <Box
                component="form"
                sx={{ mt: 1, }}
                visibility="visible"
              >
                <Typography component="h1" variant="h5" sx={{ textAlign: "start" }}>
                  What is a C-Test?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  C-Tests are a type of language test which researchers consider an accurate measure of overall language proficiency. C-Tests are well-researched, and there have been over 235 correlational studies between C-tests & other language tests, such as IELTS, TOEFL and TOEIC. C-tests have also been used in research studies measuring  proficiency in over 20 different languages, including languages with distinct writing systems such as Bangla, Japanese, Turkish and Korean. TestPredikt™ uses your score on a C-Test, combined with a vocabulary test and the demographic information you provide to the Prediktor™ Wizard, to give you a scientific prediction of your score on several international English language tests.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  <strong>Q:</strong> Do I have to answer all of the questions asked by the Prediktor™ Wizard?  —Arif, India
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  <strong>A:</strong> TestPredikt utilises Text Inspector, a text analysis tool which benchmarks over 200 indicators with the CEFR, to ensure the open source texts used in our C-Tests are all of comparable degrees of difficulty.
                </Typography>


              </Box>



            </CardContent>

          </Card>
        }

        {flag == 4 &&
          <Card sx={{ borderRadius: "15px", mt: 2 }} variant="outlined" >
            <CardContent >

              <Box
                component="form"
                sx={{ mt: 1, }}
                visibility="visible"
              >
                <Typography component="h1" variant="h5" sx={{ textAlign: "start" }}>
                  What is a V-Test?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  The Vocabulary Levels Test (or V-Test) is a type of language test that estimates the size of your vocabulary, by asking questions about the meaning of the most frequently used word families in English. A V-Test begins by testing your knowledge of example words from the most frequently used 1,000 words, followed by the most frequently used 2,000 words, and so on.  Research shows that V-Tests scores correlate significantly to writing and reading scores of several international language tests. TestPredikt™ uses an adapted version of the V-Test, combined with a modified cloze test (C-test) and the demographic information you provide to the Prediktor™ Wizard, to give you a scientific prediction of your score on several international English language tests.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  <strong>Q:</strong>A V-Test asks only about a few words. Can this really measure all the English words I know?  —Bharat, Nepal
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "justify", mt: 3, mx: 1 }}
                  display="inline-block"
                >
                  <strong>A:</strong> V-Tests are widely used by language teachers around the world to provide an estimate of a learner’s vocabulary size. A V-Test uses randomly selected words from each level of the most frequently used words in English: 10 words from a list of the most 1,000 frequently used words, 10 words from a list of the most 2,000 frequently used words, and so on. Researchers have shown that V-Tests are a valid and reliable way to estimate how many words someone knows.
                </Typography>


              </Box>



            </CardContent>

          </Card>
        }
      </Container>
    </ThemeProvider>
  );
}
