using FluentValidation;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.Login
{
    public class LoginCommandValidator : AbstractValidator<LoginCommand>
    {
        public LoginCommandValidator()
        {
            RuleFor(r => r.Username).NotEmpty().WithMessage("Please enter email or phone number");
            RuleFor(r => r.Username).Matches(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$|^\+?\d{0,2}\-?\d{4,5}\-?\d{5,6}").WithMessage("Please enter a valid email address or phone number");
            RuleFor(r => r.Password).NotEmpty().WithMessage("Password is required");
        }
    }
}
