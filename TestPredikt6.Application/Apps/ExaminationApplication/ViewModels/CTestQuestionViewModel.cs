using System.ComponentModel.DataAnnotations;
using TestPredikt.Application.Apps.ExaminationApplication.CTestQuestion;
using TestPredikt.Application.Apps.ExaminationApplication.VTest.Start;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.ExaminationApplication.ViewModels
{
    public class VTestQuestionViewModel : BaseViewModel<VTestQuestionViewModel, VTestStartCommand>
    {
        [Required]
        public int ExamId { get; set; }
    }
}
