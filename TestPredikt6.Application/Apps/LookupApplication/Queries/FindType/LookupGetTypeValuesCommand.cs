using Common;
using MediatR;
using System.Collections.Generic;
using TestPredikt.Models;

namespace TestPredikt.Application.Apps.LookupApplication.Queries.FindType
{
    public class LookupGetTypeValuesCommand : IRequest<OperationResult<List<Lookup>>>
    {
        public List<string> Types { get; set; }
    }
}
