using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using MediatR;

namespace TestPredikt.Application.Apps.ExaminationApplication.CTestQuestion
{
    public class CTestQuestionCommand : IRequest<OperationResult>
    {
        public int ExamId { get; set; }
        public string UserName { get; set; }
    }
}
