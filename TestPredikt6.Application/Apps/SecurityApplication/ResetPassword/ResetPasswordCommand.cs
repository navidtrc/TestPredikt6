using Common;
using MediatR;
using System;
using TestPredikt.Application.Common;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.ResetPassword
{
    public class ResetPasswordCommand : IRequest<OperationResult>, ICommittableRequest
    {
        public string Email { get; set; }
        public string Code { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
