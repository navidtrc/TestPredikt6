using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common;
using MediatR;

namespace TestPredikt.Application.Apps.ExaminationApplication.ExaminationStart
{
    public class ExaminationStartCommand : IRequest<OperationResult<int>>
    {
        public DateTime? FinishedDate { get; set; }
        public string UserName { get; set; }
    }
}
