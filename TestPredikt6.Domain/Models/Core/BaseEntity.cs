﻿using System;

namespace TestPredikt.Domain.Models.Core
{
    public interface IEntity
    {
        Guid Guid { get; set; }
        DateTime CreatedDate { get; set; }
        DateTime? LastModifiedDate { get; set; }
        string? Description { get; set; }
        bool IsActive { get; set; }
        bool IsDeleted { get; set; }
    }

    public interface IEntity<TKey> : IEntity
    {
        TKey Id { get; set; }
    }

    public abstract class BaseEntity<TKey> : IEntity<TKey>
    {
        public TKey Id { get; set; }
        public virtual Guid Guid { get; set; } = Guid.NewGuid();
        public virtual DateTime CreatedDate { get; set; } = DateTime.Now;
        public virtual DateTime? LastModifiedDate { get; set; }
        public virtual string? Description { get; set; }
        public virtual bool IsActive { get; set; } = true;
        public virtual bool IsDeleted { get; set; } = false;
    }

    public abstract class BaseEntity : BaseEntity<int>
    {
    }
}
