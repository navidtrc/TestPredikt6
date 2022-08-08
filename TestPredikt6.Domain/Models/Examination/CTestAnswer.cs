using System.Collections.Generic;
using TestPredikt.Domain.Models.Core;

namespace TestPredikt.Domain.Models.Examination
{
    public class CTestAnswer : BaseEntity
    {
        public int QuestionId { get; set; }
        public int BlankNo { get; set; }
        public string Answer { get; set; }

        /*Relationships*/
        public CTestQuestion CTestQuestion { get; set; }
        public List<CTestUserAnswer> CTestUserAnswers { get; set; }
    }
}
