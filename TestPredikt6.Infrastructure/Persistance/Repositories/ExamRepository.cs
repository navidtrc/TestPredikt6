using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories
{
    public class ExamRepository : Repository<Exam>, IExamRepository
    {
        public ExamRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
