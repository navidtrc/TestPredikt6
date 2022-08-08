using Common;
using Common.Enums;
using MediatR;
using TestPredikt.Application.Apps.SecurityApplication.Models;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.Login
{
    public class LoginCommand : IRequest<OperationResult<AccessTokenViewModel>>
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
