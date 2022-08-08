using TestPredikt.Infrastructure.Persistance.Repositories;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;
using System.Threading;
using System.Threading.Tasks;

namespace TestPredikt.Infrastructure.Persistance.Core
{
    public class UnitOfWork : IUnitOfWork
    {
        #region Constructor
        private readonly ApplicationDbContext _db;
        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
        }
        #endregion Constructor

        #region LookUp
        private ILookupRepository _lookup;
        public ILookupRepository Lookup => _lookup == null ? _lookup = new LookupRepository(_db) : _lookup;

        #endregion LookUp

        #region Security
        #region User
        private IUserRepository _users;
        public IUserRepository Users => _users == null ? _users = new UserRepository(_db) : _users;

        #endregion User

        #region Role
        private IRoleRepository _roles;
        public IRoleRepository Roles => _roles == null ? _roles = new RoleRepository(_db) : _roles;
        #endregion Role

        #region Customer
        private ICustomerRepository _customers;
        public ICustomerRepository Customers => _customers == null ? _customers = new CustomerRepository(_db) : _customers;
        #endregion Customer

        #endregion Security

        #region Examination

        #region Exam
        private IExamRepository _exams;
        public IExamRepository Exams => _exams == null ? _exams = new ExamRepository(_db) : _exams;
        #endregion Exam

        #region PTest
        /*PTestQuestion*/
        // rivate IPTestQuestionRepository _pTestQuestion;
        // ublic IPTestQuestionRepository PTestQuestions => _pTestQuestion == null ? _pTestQuestion = new PTestQuestionRepository(_db) : _pTestQuestion;

        /*PTestUserAnswer*/
        private IPTestUserAnswerRepository _pTestUserAnswers;
        public IPTestUserAnswerRepository PTestUserAnswers => _pTestUserAnswers == null ? _pTestUserAnswers = new PTestUserAnswerRepository(_db) : _pTestUserAnswers;

        #endregion PTest

        #region CTest
        /*CTestQuestion*/
        private ICTestQuestionRepository _cTestQuestions;
        public ICTestQuestionRepository CTestQuestions => _cTestQuestions == null ? _cTestQuestions = new CTestQuestionRepository(_db) : _cTestQuestions;

        /*CTestAnswer*/
        private ICTestAnswerRepository _cTestAnswers;
        public ICTestAnswerRepository CTestAnswers => _cTestAnswers == null ? _cTestAnswers = new CTestAnswerRepository(_db) : _cTestAnswers;

        /*CTestUserAnswer*/
        private ICTestUserAnswerRepository _cTestUserAnswers;
        public ICTestUserAnswerRepository CTestUserAnswers => _cTestUserAnswers == null ? _cTestUserAnswers = new CTestUserAnswerRepository(_db) : _cTestUserAnswers;


        #endregion CTest

        #region VTest
        /*VTestQuestion*/
        private IVTestQuestionRepository _vTestQuestions;
        public IVTestQuestionRepository VTestQuestions => _vTestQuestions == null ? _vTestQuestions = new VTestQuestionRepository(_db) : _vTestQuestions;
        #endregion

        #endregion Examination


        public int Complete()
        {
            return _db.SaveChanges();
        }
        public async Task<int> CompleteAsync(CancellationToken cancellationToken)
        {
            return await _db.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
        }
        public void Dispose()
        {
            _db.Dispose();
        }
    }
}
