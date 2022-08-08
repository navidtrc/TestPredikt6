using System.Collections.Generic;
using Common;
using MediatR;
using TestPredikt.Application.Apps.ExaminationApplication.ViewModels;

namespace TestPredikt.Application.Apps.ExaminationApplication.VTest.Start
{
    public class VTestStartCommand : IRequest<OperationResult<List<VTestStartViewModel>>>
    {
        public int ExamId { get; set; }
    }
}
