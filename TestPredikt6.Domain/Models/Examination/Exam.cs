using System;
using System.Collections.Generic;
using TestPredikt.Domain.Models.Core;
using TestPredikt.Domain.Models.Security;

namespace TestPredikt.Domain.Models.Examination
{
    public class Exam : BaseEntity
    {
        // Finished All Exam Details Date
        public DateTime? FinishedDate { get; set; }

        public string UserId { get; set; }

        /*Calculated Score Base on details Scores*/
        public double OverallScore { get; set; }

        public string VTestAnswer { get; set; }

        /*RelationShips*/
        public User User { get; set; }
        public List<PTestUserAnswer> PTestUserAnswers { get; set; }
        public List<CTestUserAnswer> CTestUserAnswers { get; set; }
    }
}
