using TestPredikt.Domain.Models.Core;

namespace TestPredikt.Domain.Models.Examination
{
    public class CTestUserAnswer : BaseEntity
    {
        public int ExamId { get; set; }
        public int AnswerId { get; set; }
        public string UserAnswer { get; set; }
        public bool IsCorrect { get; set; }


        /*Relationships*/
        public Exam Exam { get; set; }
        public CTestAnswer CTestAnswer { get; set; }

    }
}
