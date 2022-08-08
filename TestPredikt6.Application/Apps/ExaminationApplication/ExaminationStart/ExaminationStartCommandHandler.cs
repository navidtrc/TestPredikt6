using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.ExaminationApplication.ExaminationStart
{
    public class ExaminationStartCommandHandler : IRequestHandler<ExaminationStartCommand, OperationResult<int>>
    {
        private readonly IUnitOfWork _uow;

        public ExaminationStartCommandHandler(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
        }

        public async Task<OperationResult<int>> Handle(ExaminationStartCommand request, CancellationToken cancellationToken)
        {
            var user = _uow.Users.Table.FirstOrDefault(f => f.NormalizedUserName == request.UserName);
            var currentExam = _uow.Exams.Table.FirstOrDefault(e => e.UserId == user.Id && e.FinishedDate == null);

            // If there is unfinished exam
            // TODO: Add PTestScore == null Here, return error on PTestScore!=null
            if (currentExam != null)
            {
                currentExam.LastModifiedDate = DateTime.Now;
                return new OperationResult<int>(true, currentExam.Id);
            }

            var exam = new Exam()
            {
                UserId = user?.Id,
                FinishedDate = null,
                LastModifiedDate = DateTime.Now
            };

            await _uow.Exams.AddAsync(exam, cancellationToken);
            await _uow.CompleteAsync(cancellationToken);

            return new OperationResult<int>(true, exam.Id);
        }
    }
}
