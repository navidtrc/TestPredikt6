using TestPredikt.Domain.Models.Security;
using TestPredikt.Infrastructure.Persistance.Core;
using TestPredikt.Infrastructure.Persistance.Repositories.Core;

namespace TestPredikt.Infrastructure.Persistance.Repositories
{
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    {
        public CustomerRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
