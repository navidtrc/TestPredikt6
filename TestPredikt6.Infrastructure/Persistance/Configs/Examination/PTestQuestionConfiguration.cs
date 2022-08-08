using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Examination;


namespace TestPredikt.Infrastructure.Persistance.Configs.Examination
{
    public class PTestQuestionConfiguration : IEntityTypeConfiguration<PTestQuestion>
    {
        public void Configure(EntityTypeBuilder<PTestQuestion> builder)
        {
            builder.ToTable("PTestQuestion", "Examination");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(PTestQuestion)}");
        }
    }
}