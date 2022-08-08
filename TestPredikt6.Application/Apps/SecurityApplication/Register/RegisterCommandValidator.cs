using FluentValidation;
using TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation;

namespace TestPredikt.Application.SecurityApplication.Authentication.Register
{
    public class RegisterCommandValidator : AbstractValidator<RegisterCommand>
    {
        public RegisterCommandValidator()
        {
            RuleFor(r => r.Email).NotEmpty().WithMessage("Email is required");
            RuleFor(r => r.Email).EmailAddress().WithMessage("Email is not correct");
            RuleFor(r => r.Name).NotEmpty().WithMessage("Name is required");
            RuleFor(r => r.ConfirmEmail).NotEmpty().WithMessage("Confirm Password is required");
            RuleFor(m => m.ConfirmEmail).Must((model, field) => model.ConfirmEmail == field ).WithMessage("Password is not match");
        }
    }
}
