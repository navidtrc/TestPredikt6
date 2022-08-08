using Common;
using Common.Enums;
using MediatR;
using TestPredikt.Application.Common;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation
{
    public class ForgetPasswordCommand : IRequest<OperationResult<string>>, ICommittableRequest
    {
        public string Email { get; set; }
    }
}
