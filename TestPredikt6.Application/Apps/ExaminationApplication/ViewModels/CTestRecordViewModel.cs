using System.Collections.Generic;
using TestPredikt.Application.Apps.ExaminationApplication.CTestRecord;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.ExaminationApplication.ViewModels
{
    public class CTestRecordViewModel : BaseViewModel<CTestRecordViewModel, CTestRecordCommand>
    {
        public string UserName { get; set; }
        public int ExamId { get; set; }
        public string QuestionIds { get; set; }
        public string Answers { get; set; }
    }
}
