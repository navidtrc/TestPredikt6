using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestPredikt.Domain.Models.Core;

namespace TestPredikt.Domain.Models.Examination
{
    public class PTestQuestion : BaseEntity
    {
        public string QuestionDescription { get; set; }

        public int Sequence { get; set; }

        /*Relationships*/

        public List<PTestUserAnswer> PTestUserAnswers { get; set; }

    }
}
