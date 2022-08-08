using TestPredikt.Domain.Models.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TestPredikt.Infrastructure.Persistance.Configs.Security
{
    public class PersonConfiguration : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> builder)
        {
            builder.ToTable("Person", "Security");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(Person)}");

            builder.HasOne(o => o.User)
                .WithOne(o => o.Person)
                .HasForeignKey<Person>(f => f.UserId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
