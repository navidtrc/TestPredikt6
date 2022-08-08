using TestPredikt.Domain.Models.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TestPredikt.Infrastructure.Persistance.Configs.Security
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.ToTable("Role", "Security");

            builder.Property(p => p.Name).IsRequired(true);
        }
    }
}
