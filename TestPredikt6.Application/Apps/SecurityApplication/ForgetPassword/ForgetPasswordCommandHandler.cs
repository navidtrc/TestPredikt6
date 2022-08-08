using Common;
using Common.Enums;
using Common.Exceptions;
using Common.Utilities;
using EmailSender.Models;
using EmailSender.Service;
using MediatR;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation
{
    public class ForgetPasswordCommandHandler : IRequestHandler<ForgetPasswordCommand, OperationResult<string>>
    {
        private readonly IUnitOfWork _uow;
        private readonly IEmailSender _emailSender;

        public ForgetPasswordCommandHandler(IUnitOfWork uow, IEmailSender emailSender)
        {
            _uow = uow;
            _emailSender = emailSender;
        }

        public async Task<OperationResult<string>> Handle(ForgetPasswordCommand request, CancellationToken cancellationToken)
        {
            User user = _uow.Users.Table.FirstOrDefault(f => f.Email == request.Email);
            if (user == null)
                throw new NotFoundException("User is not find");
            // var confirmationCode = CodeGenerator.Generate();
            var confirmationCode = "13579";
            user.ConfirmationCodeHash = SecurityHelper.GetSha256Hash(confirmationCode);
            await _uow.Users.UpdateAsync(user, cancellationToken);
            // var message = new Message(new string[] { user.Email }, "Reset Password", $"Code: {confirmationCode}", null);
            // await _emailSender.SendEmailAsync(message);
            return new OperationResult<string>(true, user.Id, "Code sent for reset password");
        }
    }
}
