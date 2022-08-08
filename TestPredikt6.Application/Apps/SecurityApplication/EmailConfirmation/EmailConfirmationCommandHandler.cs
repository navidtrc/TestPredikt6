using Common;
using Common.Utilities;
using MediatR;
using Microsoft.AspNetCore.Identity;
using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation
{
    public class EmailConfirmationCommandHandler : IRequestHandler<EmailConfirmationCommand, OperationResult>
    {
        private readonly IUnitOfWork _uow;
        private readonly UserManager<User> _userManager;

        public EmailConfirmationCommandHandler(IUnitOfWork uow, UserManager<User> userManager)
        {
            _uow = uow;
            _userManager = userManager;
        }

        public async Task<OperationResult> Handle(EmailConfirmationCommand request, CancellationToken cancellationToken)
        {
            var user = _uow.Users.Table.Single(f => f.Email == request.Email);
            var confirmationCodeHash = SecurityHelper.GetSha256Hash(request.Code);
            if (user.ConfirmationCodeHash == confirmationCodeHash && request.Password.Equals(request.ConfirmPassword))
            {
                user.IsActive = true;
                user.EmailConfirmed = true;
                user.ConfirmationCodeHash = SecurityHelper.GetSha256Hash(CodeGenerator.Generate());
                await _userManager.ChangePasswordAsync(user, "notconfirmed", request.Password);
                await _userManager.UpdateSecurityStampAsync(user);
                await _uow.Users.UpdateAsync(user, cancellationToken);
                return new OperationResult(true, "Email confirmed succesfully");
            }
            return new OperationResult(false, "Confirmation failed");
        }
    }
}
