using TestPredikt.Domain.Common.Enums;
using TestPredikt.Domain.Models.Core;
using System;

namespace TestPredikt.Domain.Models.Security
{
    public class Person : BaseEntity
    {
        public string Name { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
    }
}
