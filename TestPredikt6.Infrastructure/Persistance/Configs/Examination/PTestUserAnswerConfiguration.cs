using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Examination;

namespace TestPredikt.Infrastructure.Persistance.Configs.Examination
{
    public class PTestUserAnswerConfiguration : IEntityTypeConfiguration<PTestUserAnswer>
    {
        public void Configure(EntityTypeBuilder<PTestUserAnswer> builder)
        {
            builder.ToTable("PTestUserAnswer", "Examination");


            builder.HasOne(o => o.Exam)
                .WithMany(o => o.PTestUserAnswers)
                .HasForeignKey(f => f.ExamId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(o => o.PTestQuestion)
                .WithMany(o => o.PTestUserAnswers)
                .HasForeignKey(f => f.PTestQuestionId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
