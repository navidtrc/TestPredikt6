// using System.Collections.Generic;
// using System.Linq;
// using System.Threading;
// using System.Threading.Tasks;
// using Common;
// using TestPredikt.Domain.Models.Examination;
// using TestPredikt.Infrastructure.Persistance.Core;
// using TestPredikt.Infrastructure.Persistance.Repositories.Core;
// 
// namespace TestPredikt.Infrastructure.Persistance.Repositories
// {
//     class PTestQuestionRepository : Repository<PTestQuestion>, IPTestQuestionRepository
//     {
//         public PTestQuestionRepository(ApplicationDbContext dbContext) : base(dbContext)
//         {
//         }
// 
//         public async Task<OperationResult<List<PTestQuestion>>> GetPTestQuestion(CancellationToken cancellationToken)
//         {
//             var pTestQuestions = await TableNoTracking.Where(q => q.IsActive).ToListAsync(cancellationToken);
//             return pTestQuestions.Count == 0
//                 ? new OperationResult<List<PTestQuestion>>(false, null, "No Question Found")
//                 : new OperationResult<List<PTestQuestion>>(true, pTestQuestions);
//         }
//     }
// }
