using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestPredikt.Domain.Models.Exam;

namespace TestPredikt.Infrastructure.Persistance.Configs.Exam
{
    public class CTestConfiguration : IEntityTypeConfiguration<CTest>
    {
        public void Configure(EntityTypeBuilder<CTest> builder)
        {
            builder.ToTable("CTest", "Exam");
            builder.Property(p => p.Name).IsRequired();
        }
    }
}
