using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MediatR;
using TestPredikt.Application.WebFramework.Api;
using AutoMapper;
using System.Security.Claims;
using System;
using TestPredikt.Application.Apps.SecurityApplication.Models;
using TestPredikt.Application.Apps.SecurityApplication.Authentication.Logout;

namespace TestPredikt.UI.Controllers
{
    [ApiController]
    public class AccountController : BaseController
    {




        public AccountController(IMediator mediator, IMapper mapper) : base(mediator, mapper)
        {
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> Login(LoginViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result);
            return BadRequest(result.Message);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> Register(RegisterViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result);
            return BadRequest(result.Message);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> ConfirmEmail(ConfirmEmailViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result);
            return BadRequest(result.Message);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> ForgetPassword(ForgetPasswordViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result);
            return BadRequest(result.Message);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result);
            return BadRequest(result.Message);
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> Logout(CancellationToken cancellationToken)
        {
            if (!UserIsAutheticated)
                return BadRequest();
            var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var result = await _mediator.Send(new LogoutCommand() { UserId = userId }, cancellationToken);
            if (result.IsSuccess)
                return SignOut();
            return BadRequest(result.Message);
        }
    }
}