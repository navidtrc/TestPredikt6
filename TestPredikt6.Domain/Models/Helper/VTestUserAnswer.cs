using System;
using System.Collections.Generic;
using TestPredikt.Domain.Models.Examination;

namespace TestPredikt.Domain.Models.Helper
{
    public class VTestUserAnswer
    {
        public List<VTestAnswer> Answers { get; set; }
        public int Score { get; set; }
    }
    public class VTestAnswer
    {
        public VTestQuestion VTestQuestion { get; set; }
        public string UserAnswer { get; set; }
    }
}
