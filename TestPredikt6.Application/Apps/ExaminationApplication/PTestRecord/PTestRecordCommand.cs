using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using MediatR;

namespace TestPredikt.Application.Apps.ExaminationApplication.PTestRecord
{
    public class PTestRecordCommand : IRequest<OperationResult>
    {
        public int ExamId { get; set; }
        public string UserName { get; set; }

        public string Year { get; set; }
        public string Country { get; set; }
        public string Gender { get; set; }
        public string EmploymentStatus { get; set; }
        public string Industry { get; set; }
        public string PositionStatus { get; set; }
    }
}
