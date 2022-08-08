using FluentValidation;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation
{
    public class ForgetPasswordCommandValidator : AbstractValidator<ForgetPasswordCommand>
    {
        public ForgetPasswordCommandValidator()
        {
            RuleFor(r => r.Email).NotEmpty().WithMessage("EmailOrPhone is required");
        }
    }
}
