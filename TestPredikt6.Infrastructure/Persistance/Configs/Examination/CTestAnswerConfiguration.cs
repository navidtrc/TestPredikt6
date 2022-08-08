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
    public class CTestAnswerConfiguration : IEntityTypeConfiguration<CTestAnswer>
    {
        public void Configure(EntityTypeBuilder<CTestAnswer> builder)
        {
            builder.ToTable("CTestAnswer", "Examination");
            builder.Property(p => p.Id).UseHiLo($"Sequence-{nameof(CTestAnswer)}");

            builder.HasOne(o => o.CTestQuestion)
                .WithMany(o => o.CTestAnswers)
                .HasForeignKey(f => f.QuestionId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.NoAction);


        }
    }
}
