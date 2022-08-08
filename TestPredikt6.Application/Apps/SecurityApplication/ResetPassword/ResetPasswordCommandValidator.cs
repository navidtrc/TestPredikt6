using FluentValidation;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.ResetPassword
{
    public class ResetPasswordCommandValidator : AbstractValidator<ResetPasswordCommand>
    {
        public ResetPasswordCommandValidator()
        {
            RuleFor(r => r.Code).NotEmpty().WithMessage("Code is required");
            RuleFor(r => r.Password).NotEmpty().WithMessage("Password is required");
            RuleFor(r => r.ConfirmPassword).NotEmpty().WithMessage("Confirm Password is required");
            RuleFor(m => m.ConfirmPassword).Must((model, field) => model.Password == field).WithMessage("Password is not match");
        }
    }
}
