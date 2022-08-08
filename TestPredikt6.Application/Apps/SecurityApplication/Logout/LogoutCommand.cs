using Common;
using MediatR;
using System;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.Logout
{
    public class LogoutCommand : IRequest<OperationResult>
    {
        public Guid UserId { get; set; }    
    }
}
