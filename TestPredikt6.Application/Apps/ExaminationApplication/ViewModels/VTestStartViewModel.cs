using System.Collections.Generic;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Domain.Models.Helper;

namespace TestPredikt.Application.Apps.ExaminationApplication.ViewModels
{
    public class VTestStartViewModel
    {
        public int Group { get; set; }
        public List<VTestQuestion> Questions { get; set; }

    }
}
