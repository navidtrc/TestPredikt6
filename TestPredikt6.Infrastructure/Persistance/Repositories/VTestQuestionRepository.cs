using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories
{
    public class VTestQuestionRepository : Repository<VTestQuestion>, IVTestQuestionRepository
    {

        public VTestQuestionRepository(ApplicationDbContext dbContext) : base(dbContext)
        {

        }

    }
}