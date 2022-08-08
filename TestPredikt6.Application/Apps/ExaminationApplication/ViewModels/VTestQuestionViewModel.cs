using System.ComponentModel.DataAnnotations;
using TestPredikt.Application.Apps.ExaminationApplication.CTestQuestion;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.ExaminationApplication.ViewModels
{
    public class CTestQuestionViewModel : BaseViewModel<CTestQuestionViewModel, CTestQuestionCommand>
    {
        [Required]
        public int ExamId { get; set; }

        [Required]
        public string UserName { get; set; }

    }
}
