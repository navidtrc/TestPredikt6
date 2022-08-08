using Common;
using Common.Utilities;
using EmailSender.Service;
using MediatR;
using Microsoft.AspNetCore.Identity;
using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication.EmailConfirmation
{
    public class RegisterCommandHandler : IRequestHandler<RegisterCommand, OperationResult>
    {
        private readonly IUnitOfWork _uow;
        private readonly IEmailSender _emailSender;
        private readonly UserManager<User> _userManager;

        public RegisterCommandHandler(IUnitOfWork uow, IEmailSender emailSender, UserManager<User> userManager)
        {
            _uow = uow;
            _emailSender = emailSender;
            _userManager = userManager;
        }
        public async Task<OperationResult> Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            // var confirmationCode = CodeGenerator.Generate();
            var confirmationCode = "13579";

            User user = _uow.Users.TableNoTracking.FirstOrDefault(f => f.Email == request.Email);
            if (user != null)
            {
                if (user.EmailConfirmed == true)
                    return new OperationResult(false, "User already exist");
                else if (user.EmailConfirmed == false)
                {
                    user.ConfirmationCodeHash = SecurityHelper.GetSha256Hash(confirmationCode);
                    // var message = new Message(new string[] { user.Email }, "Email Confirmation", $"Code: {confirmationCode}", null);
                    // await _emailSender.SendEmailAsync(message);
                    return new OperationResult(true, "Check your Email for confirmation");
                }
                else if (user.IsActive == false && user.EmailConfirmed == true)
                    return new OperationResult(false, "User is locked");
            }
            else
                user = new();
           

            user.IsActive = false;
            user.EmailConfirmed = false;
            user.ConfirmationCodeHash = SecurityHelper.GetSha256Hash(confirmationCode);
            user.Email = request.Email;
            user.UserName = request.Email;
            try
            {
                var result = await _userManager.CreateAsync(user, "notconfirmed");
                if (result.Succeeded)
                {
                    Customer customer = new Customer
                    {
                        UserId = user.Id,
                        Name = request.Name
                    };
                    await _uow.Customers.AddAsync(customer, cancellationToken);
                    await _uow.CompleteAsync(cancellationToken);

                    // var message = new Message(new string[] { user.Email }, "Email Confirmation", $"Code: {confirmationCode}", null);
                    // await _emailSender.SendEmailAsync(message);
                    return new OperationResult(true, "Check your Email for confirmation");
                }
            }
            catch (Exception ex)
            {

            }
            
            return new OperationResult(false);
            //return new OperationResult(false, string.Join(',', result.Errors));
        }
    }
}
