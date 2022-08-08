using TestPredikt.Domain.Models.Core;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace TestPredikt.Domain.Models.Security
{
    public class Role : IdentityRole, IEntity<string>
    {
        public Guid Guid { get; set; } = Guid.NewGuid();
        public DateTime CreatedDate { get; set; }
        public DateTime? LastModifiedDate { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
    }
}
