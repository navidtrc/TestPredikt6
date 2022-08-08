using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Security;

namespace TestPredikt.Infrastructure.Persistance.Configs.Security
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Customer", "Security");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(Customer)}");

        }
    }
}
