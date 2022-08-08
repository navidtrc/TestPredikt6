using Common;
using Common.Utilities;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.ResetPassword
{
    public class ResetPasswordCommandHandler : IRequestHandler<ResetPasswordCommand, OperationResult>
    {
        private readonly IUnitOfWork _uow;
        private readonly UserManager<User> _userManager;

        public ResetPasswordCommandHandler(IUnitOfWork uow, UserManager<User> userManager)
        {
            _uow = uow;
            _userManager = userManager;
        }

        public async Task<OperationResult> Handle(ResetPasswordCommand request, CancellationToken cancellationToken)
        {
            var user = await _uow.Users.Table.FirstOrDefaultAsync(f => f.Email == request.Email);
            if (user.ConfirmationCodeHash == SecurityHelper.GetSha256Hash(request.Code))
            {
                user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, request.Password);
                await _userManager.UpdateAsync(user);
                await _userManager.UpdateSecurityStampAsync(user);
                return new OperationResult(true, "Password changed succesfully");
            }
            return new OperationResult(false, "Password changing failed");
        }
    }
}
