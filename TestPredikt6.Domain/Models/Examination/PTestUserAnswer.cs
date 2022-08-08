using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestPredikt.Domain.Models.Core;

namespace TestPredikt.Domain.Models.Examination
{
    public class PTestUserAnswer: BaseEntity
    {
        [Required]
        public int ExamId { get; set; }

        [Required]
        public int PTestQuestionId { get; set; }

        [Required]
        public string Answer { get; set; }

        /*Relationships*/
        public Exam Exam { get; set; }
        public PTestQuestion PTestQuestion { get; set; }
    }
}
