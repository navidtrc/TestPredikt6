using Common;
using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance.Core;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TestPredikt.Application.Apps.SecurityApplication.Models;
using EmailSender.Service;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.Login
{
    public class LoginCommandHandler : IRequestHandler<LoginCommand, OperationResult<AccessTokenViewModel>>
    {
        private readonly IUnitOfWork _uow;
        private readonly IJwtService _jwtService;
        private readonly SignInManager<User> _signInManager;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly IEmailSender _emailSender;

        public LoginCommandHandler(IUnitOfWork uow,
            IJwtService jwtService,
            SignInManager<User> signInManager,
            IPasswordHasher<User> passwordHasher,
            IEmailSender emailSender)
        {
            _uow = uow;
            _jwtService = jwtService;
            _signInManager = signInManager;
            _passwordHasher = passwordHasher;
            _emailSender = emailSender;
        }

        public async Task<OperationResult<AccessTokenViewModel>> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            User user = _uow.Users.Table.Include(i => i.Person).FirstOrDefault(f => f.Email == request.Username);
            if (user.EmailConfirmed == false)
                return new OperationResult<AccessTokenViewModel>(false, null, "Need to confirm email address");
            var signInResult = await _signInManager.PasswordSignInAsync(user.UserName, request.Password, false, false);
            if (signInResult.Succeeded)
                return new OperationResult<AccessTokenViewModel>(true, await _jwtService.GenerateAsync(user));
            return new OperationResult<AccessTokenViewModel>(false, null, "Login failed");
        }
    }
}
