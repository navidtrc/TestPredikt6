using System;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        
        IRoleRepository Roles { get; }
       
        ILookupRepository Lookup { get; }

        ICustomerRepository Customers { get; }

        IExamRepository Exams { get; }

        // IPTestQuestionRepository PTestQuestions { get; }

        IPTestUserAnswerRepository PTestUserAnswers { get; }

        ICTestQuestionRepository CTestQuestions { get; }

        ICTestAnswerRepository CTestAnswers { get; }

        ICTestUserAnswerRepository CTestUserAnswers { get; }

        IVTestQuestionRepository VTestQuestions { get; }

        int Complete();
        Task<int> CompleteAsync(CancellationToken cancellationToken);
    }
}
