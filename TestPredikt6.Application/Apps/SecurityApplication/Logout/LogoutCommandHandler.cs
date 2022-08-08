using Common;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.Logout
{
    public class LogoutCommandHandler : IRequestHandler<LogoutCommand, OperationResult>
    {
        private readonly IUnitOfWork _uow;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public LogoutCommandHandler(IUnitOfWork uow, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _uow = uow;
            _userManager = userManager;
            _signInManager = signInManager;
        }
        public async Task<OperationResult> Handle(LogoutCommand request, CancellationToken cancellationToken)
        {
            var user = await _uow.Users.GetByIdAsync(cancellationToken, request.UserId);
            var result = await _userManager.UpdateSecurityStampAsync(user);
            if (result.Succeeded)
                await _signInManager.SignOutAsync();
            return new OperationResult(true, "Logout succesfully");
        }
    }
}
