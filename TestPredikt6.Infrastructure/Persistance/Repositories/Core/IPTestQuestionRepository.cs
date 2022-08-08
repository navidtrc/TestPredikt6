using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Common;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories.Core
{
    public interface IPTestQuestionRepository : IRepository<PTestQuestion>
    {
        Task<OperationResult<List<PTestQuestion>>> GetPTestQuestion(CancellationToken cancellationToken);
    }
}
