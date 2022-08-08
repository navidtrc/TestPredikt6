using Common;
using MediatR;
using TestPredikt.Application.Common;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation
{
    public class RegisterCommand : IRequest<OperationResult>, ICommittableRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string ConfirmEmail { get; set; }
    }
}
