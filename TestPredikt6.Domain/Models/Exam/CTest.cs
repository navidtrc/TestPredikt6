using System;
using TestPredikt.Domain.Models.Core;

namespace TestPredikt.Domain.Models.Exam
{
    public class CTest : BaseEntity<long>
    {
        public string Name { get; set; }
    }
}
