import axios from "axios";
const apiUrl = "api/examination/";
import AuthService from "./auth.service";

class ExaminationService {

    startExam() {
        const userName = AuthService.getCurrentUserName();
        return axios
            .post(apiUrl + "StartExam",
                {
                    userName
                })
            .then((response) => {
                localStorage.setItem("examId", JSON.stringify(response.data.data));
                return response.data;
            });
    }

    sendPTest(year,country,gender,employmentStatus,industry,positionStatus ) {
        const userName = AuthService.getCurrentUserName();
        const examId = AuthService.getCurrentExamId();
        return axios
            .post(apiUrl + "FinishPTest",
                {
                    examId,
                    userName,
                    year,
                    country,
                    gender,
                    employmentStatus,
                    industry,
                    positionStatus
                })
            .then((response) => {

                return response.data;
            });
    }

    startCTest() {
        const userName = AuthService.getCurrentUserName();
        return axios
            .post(apiUrl + "StartCTest",
                {
                    userName
                })
            .then((response) => {
                localStorage.setItem("examId", JSON.stringify(response.data.data));
                return response.data;
            });
    }

    getCTestQuestion() {
        // debugger;
        let userName = AuthService.getCurrentUserName();
        let examId = AuthService.getCurrentExamId();

        return axios
            .post(apiUrl + 'GetCTestQuestion',
                {
                    "ExamId" : parseInt(examId),
                    "UserName" : userName
                }).then((response => {
                    // debugger;
                return response.data;
            }));
    }

    sendCTestUserAnswer(questionIds,answers) {
        const userName = AuthService.getCurrentUserName();
        const examId = AuthService.getCurrentExamId();
        return axios
            .post(apiUrl + 'CTestRecord',
                {
                    userName,
                    examId,
                    "QuestionIds": JSON.stringify(questionIds),
                    "Answers": JSON.stringify(answers)
                }).then((response => {
                    return response.data;
            }));
    }

    getVTestQuestion() {
        let examId = AuthService.getCurrentExamId();

        return axios
            .post(apiUrl + 'StartVTest',
                {
                    "ExamId" : parseInt(examId)
                }).then((response => {
                    // debugger;
                return response.data;
            }));
    }
}
export default new ExaminationService();