using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Common;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories
{
    public class CTestAnswerRepository : Repository<CTestAnswer>, ICTestAnswerRepository
    {
        public CTestAnswerRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}