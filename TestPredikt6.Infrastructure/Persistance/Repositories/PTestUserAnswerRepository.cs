using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories
{
    public class PTestUserAnswerRepository : Repository<PTestUserAnswer>, IPTestUserAnswerRepository
    {
        public PTestUserAnswerRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
