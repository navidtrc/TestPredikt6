using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using Microsoft.IdentityModel.Tokens;
using TestPredikt.Application.Apps.ExaminationApplication.ExaminationStart;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.ExaminationApplication.PTestRecord
{
   public class PTestRecordCommandHandler : IRequestHandler<PTestRecordCommand, OperationResult>
    {
        private readonly IUnitOfWork _uow;

        public PTestRecordCommandHandler(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
        }
        public async Task<OperationResult> Handle(PTestRecordCommand request, CancellationToken cancellationToken)
        {

            //Business
            //var user = _uow.Users.Table.FirstOrDefault(f => f.NormalizedUserName == request.UserName);

            await _uow.PTestUserAnswers.AddAsync(new PTestUserAnswer()
            {
                ExamId = request.ExamId,
                PTestQuestionId =1,
                Answer = request.Year
            }, cancellationToken);
            await _uow.PTestUserAnswers.AddAsync(new PTestUserAnswer()
            {
                ExamId = request.ExamId,
                PTestQuestionId = 2,
                Answer = request.Country
            }, cancellationToken);
            await _uow.PTestUserAnswers.AddAsync(new PTestUserAnswer()
            {
                ExamId = request.ExamId,
                PTestQuestionId = 3,
                Answer = request.Gender
            }, cancellationToken);
            await _uow.PTestUserAnswers.AddAsync(new PTestUserAnswer()
            {
                ExamId = request.ExamId,
                PTestQuestionId = 4,
                Answer = request.EmploymentStatus
            }, cancellationToken);

            await _uow.PTestUserAnswers.AddAsync(new PTestUserAnswer()
            {
                ExamId = request.ExamId,
                PTestQuestionId = 5,
                Answer = request.Industry
            }, cancellationToken);

            await _uow.PTestUserAnswers.AddAsync(new PTestUserAnswer()
            {
                ExamId = request.ExamId,
                PTestQuestionId = 6,
                Answer = request.PositionStatus
            }, cancellationToken);


            await _uow.CompleteAsync(cancellationToken);

            return new OperationResult(true);
        }
    }
}
