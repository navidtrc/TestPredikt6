using Common;
using TestPredikt.Infrastructure.Persistance.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Models;

namespace TestPredikt.Application.Apps.LookupApplication.Queries.FindType
{
    public class LookupGetTypeValuesCommandHandler : IRequestHandler<LookupGetTypeValuesCommand, OperationResult<List<Lookup>>>
    {
        private readonly IUnitOfWork uow;
        public LookupGetTypeValuesCommandHandler(IUnitOfWork uow)
        {
            this.uow = uow;
        }
        public async Task<OperationResult<List<Lookup>>> Handle(LookupGetTypeValuesCommand request, CancellationToken cancellationToken)
        {
            List<Lookup> result = new List<Lookup>();
            foreach (var type in request.Types)
            {
                var lookups = await uow.Lookup.GetTypeValues(type).Data.ToListAsync(cancellationToken);
                result.AddRange(lookups);
            }
            if (result == null)
                return new OperationResult<List<Lookup>>(true, null, "No data found");
            return new OperationResult<List<Lookup>>(true, result);
        }
    }
}
