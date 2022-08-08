using Common.Enums;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation;
using TestPredikt.Application.WebFramework.Api;
using TestPredikt.Domain.Common.Enums;

namespace TestPredikt.Application.Apps.SecurityApplication.Models
{
    public class RegisterViewModel : BaseViewModel<RegisterViewModel, RegisterCommand>
    {
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Email is not correct")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        [EmailAddress(ErrorMessage = "Confirm email is not correct")]
        [Compare("Email", ErrorMessage = "Email is not match")]
        public string ConfirmEmail { get; set; }

    }
}
