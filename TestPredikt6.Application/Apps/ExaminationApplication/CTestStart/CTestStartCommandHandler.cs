using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using Microsoft.EntityFrameworkCore;
using TestPredikt.Application.Apps.ExaminationApplication.PTestStart;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.ExaminationApplication.CTestStart
{
    public class CTestStartCommandHandler : IRequestHandler<CTestStartCommand, OperationResult<int>>
    {
        private readonly IUnitOfWork _uow;


        public CTestStartCommandHandler(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
        }

        public async Task<OperationResult<int>> Handle(CTestStartCommand request, CancellationToken cancellationToken)
        {
            var user = await _uow.Users.Table.FirstOrDefaultAsync(f => f.NormalizedUserName == request.UserName, cancellationToken);
            var currentExam = await _uow.Exams.Table.FirstOrDefaultAsync(e => e.UserId == user.Id && e.FinishedDate == null, cancellationToken);

            if (currentExam != null)
                return new OperationResult<int>(true, currentExam.Id);

            return new OperationResult<int>(false, 0);
        }
    }
}
