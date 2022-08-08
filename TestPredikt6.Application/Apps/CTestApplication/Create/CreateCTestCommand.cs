using System;
using Common;
using MediatR;

namespace TestPredikt.Application.Apps.CTestApplication.Create
{
    public class CreateCTestCommand : IRequest<OperationResult>
    {
        public string Name { get; set; }
    }
}
