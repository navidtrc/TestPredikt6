using Common.Utilities;
using TestPredikt.Domain.Models.Core;
using TestPredikt.Domain.Models.Security;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;

namespace TestPredikt.Infrastructure.Persistance
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var entitiesAssembly = typeof(IEntity).Assembly;
            var entitiesConfigurationAssembly = typeof(ApplicationDbContext).Assembly;
            modelBuilder.RegisterAllEntities<IEntity>(entitiesAssembly);
            modelBuilder.RegisterEntityTypeConfiguration(entitiesConfigurationAssembly);
            modelBuilder.ConfigureIdentityTables<string>("Security", false);
            modelBuilder.AddSequentialGuidForIdConvention();
        }
    }
}
