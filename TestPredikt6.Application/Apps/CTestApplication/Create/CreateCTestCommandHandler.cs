using System;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.CTestApplication.Create
{
    public class CreateCTestCommandHandler : IRequestHandler<CreateCTestCommand, OperationResult>
    {
        private readonly IUnitOfWork unitOfWork;

        public CreateCTestCommandHandler(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public async Task<OperationResult> Handle(CreateCTestCommand request, CancellationToken cancellationToken)
        {
            //await unitOfWork.CTests.AddAsync(new Domain.Models.Exam.CTest
            //{
            //    Name = request.Name
            //}, cancellationToken);
            //await unitOfWork.CompleteAsync(cancellationToken);
            return new OperationResult(true);
        }
    }
}
