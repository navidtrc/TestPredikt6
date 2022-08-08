import { Aux, Button, Grid, Typography } from "@mui/material";

export default function QuestionGroup({ data, level }) {
  let questionGroups = [];
  let start = (level - 1) * 5;
  let end = start + 5;
  for (let i = start; i < end; i++) {
    questionGroups.push(data.data[i]);
  }

  let questions = [];
  questionGroups.forEach((group) => {
    group.questions.forEach((question) => {
      questions.push(
        <Aux key={question.id}>
          <Grid item xs={12}>
            <Typography variant="body2">{question.questionText}</Typography>
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
              {question.option1}
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
              {question.option2}
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
              {question.option3}
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
              {question.option4}
            </Button>
          </Grid>
        </Aux>
      );
    });
  });
  return <div>{questions}</div>;
}
