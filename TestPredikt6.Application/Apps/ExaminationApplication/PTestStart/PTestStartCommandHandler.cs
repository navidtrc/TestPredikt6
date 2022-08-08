using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using TestPredikt.Application.Apps.ExaminationApplication.ExaminationStart;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.ExaminationApplication.PTestStart
{
    class PTestStartCommandHandler : IRequestHandler<PTestStartCommand, OperationResult>
    {
        private readonly IUnitOfWork _uow;


        public PTestStartCommandHandler(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
        }

        public Task<OperationResult> Handle(PTestStartCommand request, CancellationToken cancellationToken)
        {
            return null;
        }
    }
}
