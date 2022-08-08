using Common;
using MediatR;
using TestPredikt.Application.Common;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation
{
    public class EmailConfirmationCommand : IRequest<OperationResult>, ICommittableRequest
    {
        public string Email { get; set; }
        public string Code { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
