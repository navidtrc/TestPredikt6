using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Examination;

namespace TestPredikt.Infrastructure.Persistance.Configs.Examination
{
    public class CTestQuestionConfiguration : IEntityTypeConfiguration<CTestQuestion>
    {
        public void Configure(EntityTypeBuilder<CTestQuestion> builder)
        {
            builder.ToTable("CTestQuestion", "Examination");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(CTestQuestion)}");
        }
    }
}
