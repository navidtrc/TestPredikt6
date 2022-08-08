using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Models;

namespace TestPredikt.Infrastructure.Persistance.Configs
{
    public class LookupConfiguration : IEntityTypeConfiguration<Lookup>
    {
        public void Configure(EntityTypeBuilder<Lookup> builder)
        {
            builder.ToTable("Lookup","dbo");
            builder.HasIndex(p => new { p.TypeTitle, p.TypeId }).IsUnique();
            builder.Property(p => p.Aux1).IsRequired();
        }
    }
}
