using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories
{
   public class CTestUserAnswerRepository: Repository<CTestUserAnswer>,ICTestUserAnswerRepository
    {
        public CTestUserAnswerRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
