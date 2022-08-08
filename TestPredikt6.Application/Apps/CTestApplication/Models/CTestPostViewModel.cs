using System;
using System.ComponentModel.DataAnnotations;
using TestPredikt.Application.Apps.CTestApplication.Create;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.CTestApplication.Models
{
    public class CTestPostViewModel : BaseViewModel<CTestPostViewModel, CreateCTestCommand>
    {
        [Required]
        public string Name { get; set; }
    }
}
