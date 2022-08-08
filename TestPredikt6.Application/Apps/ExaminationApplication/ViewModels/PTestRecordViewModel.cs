using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestPredikt.Application.Apps.ExaminationApplication.PTestRecord;
using TestPredikt.Application.Apps.ExaminationApplication.PTestStart;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.ExaminationApplication.ViewModels
{
   public class PTestRecordViewModel : BaseViewModel<PTestRecordViewModel, PTestRecordCommand>
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
