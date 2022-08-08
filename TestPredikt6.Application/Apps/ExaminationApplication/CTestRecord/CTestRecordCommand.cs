using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using MediatR;

namespace TestPredikt.Application.Apps.ExaminationApplication.CTestRecord
{
    public class CTestRecordCommand : IRequest<OperationResult>
    {
        public string UserName { get; set; }
        public int ExamId { get; set; }
        public string QuestionIds { get; set; }
        public string Answers { get; set; }
    }
}
