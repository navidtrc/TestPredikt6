using Common.Enums;
using System.ComponentModel.DataAnnotations;
using TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.SecurityApplication.Models
{
    public class ForgetPasswordViewModel : BaseViewModel<ForgetPasswordViewModel, ForgetPasswordCommand>
    {
        [Required(ErrorMessage = "Username is required")]
        public string Email { get; set; }
    }
}
