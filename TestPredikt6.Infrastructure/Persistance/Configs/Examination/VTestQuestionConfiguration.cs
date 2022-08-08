using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Examination;

namespace TestPredikt.Infrastructure.Persistance.Configs.Examination
{
  public   class VTestQuestionConfiguration:IEntityTypeConfiguration<VTestQuestion>
    {
        public void Configure(EntityTypeBuilder<VTestQuestion> builder)
        {
            builder.ToTable("VTestQuestion", "Examination");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(VTestQuestion)}");
        }
    }
}
