using Common;
using TestPredikt.Infrastructure.Persistance.Core;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Models;

namespace TestPredikt.Infrastructure.Persistance.Repositories.Core
{
    public interface ILookupRepository : IRepository<Lookup>
    {
        Task<OperationResult> AddTypeValueAsync(string typeName, string aux1, CancellationToken cancellationToken, string aux2 = null, string aux3 = null);
        OperationResult AddTypeValue(string typeName, string aux1, string aux2 = null, string aux3 = null);
        OperationResult<Lookup> GetTypeValueById(string typeName, int typeId);
        OperationResult<IQueryable<Lookup>> GetTypeValues(string typeName);
        Task<OperationResult> UpdateTypeValueAsync(string typeName, int typeId, string aux1, CancellationToken cancellationToken, string aux2, string aux3);
        OperationResult UpdateTypeValue(string typeName, int typeId, string aux1, string aux2, string aux3);
        Task<OperationResult> DeleteTypeValueAsync(string typeName, int typeId, CancellationToken cancellationToken);
        OperationResult DeleteTypeValue(string typeName, int typeId);
        OperationResult<bool> ExistType(string typeName);
        OperationResult<bool> ExistType(string typeName, int typeId);
    }
}
