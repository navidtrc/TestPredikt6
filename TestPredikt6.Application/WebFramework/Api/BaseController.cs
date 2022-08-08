using AutoMapper;
using TestPredikt.Application.WebFramework.Filters;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace TestPredikt.Application.WebFramework.Api
{
    [ApiController]
    [ApiResultFilter]
    public class BaseController : ControllerBase
    {
        protected readonly IMediator _mediator;
        protected readonly IMapper _mapper;
        //protected readonly IDataProtector _protector;

        public BaseController(IMediator mediator, IMapper mapper/*, IDataProtectionProvider provider*/)
        {
            _mediator = mediator;
            _mapper = mapper;
            //_protector = provider.CreateProtector(GetType().FullName);
        }
        public bool UserIsAutheticated => HttpContext.User.Identity.IsAuthenticated;
    }
}
