using Common.Enums;
using System.ComponentModel.DataAnnotations;
using TestPredikt.Application.Apps.SecurityApplication.Authentication.Login;
using TestPredikt.Application.WebFramework.Api;
using TestPredikt.Application.WebFramework.Filters;

namespace TestPredikt.Application.Apps.SecurityApplication.Models
{
    public class LoginViewModel : BaseViewModel<LoginViewModel, LoginCommand>
    {
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
