using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Examination;


namespace TestPredikt.Infrastructure.Persistance.Configs.Examination
{
    public class ExamConfiguration : IEntityTypeConfiguration<Domain.Models.Examination.Exam>
    {
        public void Configure(EntityTypeBuilder<Domain.Models.Examination.Exam> builder)
        {
            builder.ToTable("Exam", "Examination");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(Exam)}");

            // One to many relationship with User
            builder.HasOne(o => o.User)
                .WithMany(o => o.Exams)
                .HasForeignKey(f => f.UserId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
