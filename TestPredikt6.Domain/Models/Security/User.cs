using Common.Enums;
using TestPredikt.Domain.Models.Core;
using Microsoft.AspNetCore.Identity;

namespace TestPredikt.Domain.Models.Security
{
    public class User : IdentityUser, IEntity<string>
    {
        public Guid Guid { get; set; } = Guid.NewGuid();
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime? LastModifiedDate { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public Person Person { get; set; }
        public eUserFrom RegisteredType { get; set; } = eUserFrom.Internal;
        public DateTimeOffset? LastLoginDate { get; set; }
        public string ConfirmationCodeHash { get; set; }


        /*Relationships*/
        public List<Domain.Models.Examination.Exam> Exams { get; set; }

    }
}
