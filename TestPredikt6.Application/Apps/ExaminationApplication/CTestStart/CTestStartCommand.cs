using System;
using Common;
using MediatR;

namespace TestPredikt.Application.Apps.ExaminationApplication.CTestStart
{
    public class CTestStartCommand : IRequest<OperationResult<int>>
    {
        public DateTime? FinishedDate { get; set; }
        public string UserName { get; set; }
    }
}
