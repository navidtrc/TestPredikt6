using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Application.Apps.LookupApplication.Queries.FindType;
using TestPredikt.Application.Apps.LookupApplication.ViewModels;
using TestPredikt.Application.WebFramework.Api;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.UI.Controllers
{
    [ApiController]
    public class LookupController : BaseController
    {
        private readonly IUnitOfWork uow;

        public LookupController(IMediator mediator, IMapper mapper, IUnitOfWork uow) : base(mediator, mapper)
        {
            this.uow = uow;
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> Get(GetLookupTypeValuesViewModel vm, CancellationToken cancellationToken)
        {
            var result2 = await _mediator.Send(new LookupGetTypeValuesCommand() { Types = vm.Types }, cancellationToken);
            if (result2.IsSuccess)
                return Ok(result2);
            return BadRequest(result2.Message);
        }
    }
}