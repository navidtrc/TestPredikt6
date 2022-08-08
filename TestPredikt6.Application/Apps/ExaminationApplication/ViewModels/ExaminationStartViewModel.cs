using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestPredikt.Application.Apps.ExaminationApplication.ExaminationStart;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.ExaminationApplication.ViewModels
{
    public class ExaminationStartViewModel : BaseViewModel<ExaminationStartViewModel, ExaminationStartCommand>
    {
        [Required]
        public string UserName { get; set; }
    }
}
