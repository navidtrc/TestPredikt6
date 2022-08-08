using TestPredikt.Domain.Models.Core;

namespace TestPredikt.Domain.Models.Examination
{
    public class CTestQuestion: BaseEntity
    {
        public int QuestionGroup { get; set; }
        public int Sequence { get; set; }
        public string QuestionTitle { get; set; }
        public string FullText { get; set; }
        public string BlankedText { get; set; }

       public List<CTestAnswer> CTestAnswers { get; set; }
    }
}
