using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestPredikt.Application.Apps.ExaminationApplication.ViewModels;
using TestPredikt.Application.WebFramework.Api;

namespace TestPredikt.UI.Controllers
{
    [ApiController]
    public class ExaminationController: BaseController
    {
        public ExaminationController(IMediator mediator, IMapper mapper) : base(mediator, mapper)
        {
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/[action]")]

        public async Task<IActionResult> StartExam(ExaminationStartViewModel vm, CancellationToken cancellationToken)
        {
            //vm.UserName = "Moh";
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result.Data);
            return BadRequest(result.Message);
        }

        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> GetPTestQuestions(PTestStartViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result.Message);
            return BadRequest(result.Message);
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> FinishPTest(PTestRecordViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result.Message);
            return BadRequest(result.Message);
        }


        [AllowAnonymous]
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> StartCTest(CTestStartViewModel vm, CancellationToken cancellationToken)
        {
            //vm.UserName = "Moh";
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result.Data);
            return BadRequest(result.Message);
        }


        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> GetCTestQuestion(CTestQuestionViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result.Message);
            return BadRequest(result.Message);
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> CTestRecord(CTestRecordViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result.Message);
            return BadRequest(result.Message);
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> StartVTest(VTestQuestionViewModel vm, CancellationToken cancellationToken)
        {
            var command = vm.ToEntity(_mapper);
            var result = await _mediator.Send(command, cancellationToken);
            if (result.IsSuccess)
                return Ok(result);
            return BadRequest(result.Message);
        }

    }
}
