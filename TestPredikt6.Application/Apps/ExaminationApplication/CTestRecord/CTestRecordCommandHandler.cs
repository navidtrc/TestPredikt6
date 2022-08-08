using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using Newtonsoft.Json;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.ExaminationApplication.CTestRecord
{
    public class CTestRecordCommandHandler : IRequestHandler<CTestRecordCommand, OperationResult>
    {
        public string UserAnswerPrefix => "ans";
        private readonly IUnitOfWork _uow;


        public CTestRecordCommandHandler(IUnitOfWork unitOfWork)
        {

            _uow = unitOfWork;
        }
        public async Task<OperationResult> Handle(CTestRecordCommand request, CancellationToken cancellationToken)
        {
            var user = _uow.Users.Table.FirstOrDefault(f => f.NormalizedUserName == request.UserName);
            var currentExam = _uow.Exams.Table.FirstOrDefault(e => e.UserId == user.Id && e.FinishedDate == null);

            if (currentExam == null || request.ExamId != currentExam.Id)
            {
                return new OperationResult(false);
            }

            var questionIdList = JsonConvert.DeserializeObject<List<int>>(request.QuestionIds).ToList();
            var eachQuestionUserAnswers = JsonConvert.DeserializeObject<List<object>>(request.Answers).ToList();
            var allNewUserAnswers = new List<CTestUserAnswer>();
            // loop on each c-test question (ie. include 25 answers)
            for (var i = 0; i < questionIdList.Count; i++)
            {
                var userAnswer = JsonConvert.DeserializeObject<Dictionary<string, string>>((eachQuestionUserAnswers[i]).ToString());

                // Join question and correct answers from database
                var QA = (from q in _uow.CTestQuestions.Table.Where(cq => cq.Id == questionIdList[i])
                          join a in _uow.CTestAnswers.Table on q.Id equals a.QuestionId into aTempJoin
                          from a in aTempJoin.DefaultIfEmpty()
                          select new
                          {
                              QuestionId = q.Id,
                              AnswerId = a.Id,
                              CorrectAnswer = a.Answer,
                              a.BlankNo
                          }).AsEnumerable();

                foreach (var answer in QA.ToList())
                {
                    var newUserAnswer = new CTestUserAnswer
                    {
                        ExamId = request.ExamId,
                        AnswerId = answer.AnswerId,
                        UserAnswer = userAnswer[UserAnswerPrefix + answer.BlankNo],
                        IsCorrect = answer.CorrectAnswer.ToLower() == userAnswer[UserAnswerPrefix + answer.BlankNo].ToLower(),
                        Guid = Guid.NewGuid(),
                        CreatedDate = DateTime.Now,
                        LastModifiedDate = DateTime.Now,
                        IsActive = true,
                        IsDeleted = false
                    };
                    allNewUserAnswers.Add(newUserAnswer);
      
                }
            }
            await _uow.CTestUserAnswers.AddRangeAsync(allNewUserAnswers, cancellationToken);
            await _uow.CompleteAsync(cancellationToken);
            var overallScore = _uow.CTestUserAnswers.Table.Count(ua => ua.IsCorrect);
            return new OperationResult(true);

            //throw new NotImplementedException();
        }
    }
}
