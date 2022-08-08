using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Threading.Tasks;
using Common;
using TestPredikt.Domain.Models.Examination;
using TestPredikt.Infrastructure.Persistance.Core;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories
{
    public class CTestQuestionRepository : Repository<CTestQuestion>, ICTestQuestionRepository
    {

        public CTestQuestionRepository(ApplicationDbContext dbContext) : base(dbContext)
        {

        }

    }
}
