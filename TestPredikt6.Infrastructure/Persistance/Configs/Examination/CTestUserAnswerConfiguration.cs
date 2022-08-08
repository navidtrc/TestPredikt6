using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Examination;

namespace TestPredikt.Infrastructure.Persistance.Configs.Examination
{
    public class CTestUserAnswerConfiguration : IEntityTypeConfiguration<CTestUserAnswer>
    {
        public void Configure(EntityTypeBuilder<CTestUserAnswer> builder)
        {
            builder.ToTable("CTestUserAnswer", "Examination");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(CTestUserAnswer)}");



            builder.HasOne(o => o.Exam)
                .WithMany(o => o.CTestUserAnswers)
                .HasForeignKey(f => f.ExamId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(o => o.CTestAnswer)
                .WithMany(o => o.CTestUserAnswers)
                .HasForeignKey(f => f.AnswerId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.NoAction);

        }
    }
}
