using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.Application.Apps.SecurityApplication.Models
{
    public class ConfirmEmailViewModel : BaseViewModel<ConfirmEmailViewModel, EmailConfirmationCommand>
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Code { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Password is not match")]
        public string ConfirmPassword { get; set; }
    }
}
