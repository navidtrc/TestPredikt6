﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using TestPredikt.Domain.Models.Core;
using Microsoft.EntityFrameworkCore;

namespace TestPredikt.Infrastructure.Persistance.Core
{
    public interface IRepository<TEntity> where TEntity : class, IEntity
    {
        DbSet<TEntity> Entities { get; }
        IQueryable<TEntity> Table { get; }
        IQueryable<TEntity> TableNoTracking { get; }

        void Add(TEntity entity, bool saveNow = false);
        Task AddAsync(TEntity entity, CancellationToken cancellationToken, bool saveNow = false);
        void AddRange(IEnumerable<TEntity> entities, bool saveNow = false);
        Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveNow = false);
        void Attach(TEntity entity);
        void Delete(TEntity entity, bool saveNow = false);
        Task DeleteAsync(TEntity entity, CancellationToken cancellationToken, bool saveNow = false);
        void DeleteRange(IEnumerable<TEntity> entities, bool saveNow = false);
        Task DeleteRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveNow = false);
        void Detach(TEntity entity);
        TEntity GetById(params object[] ids);
        ValueTask<TEntity> GetByIdAsync(CancellationToken cancellationToken, params object[] ids);
        void LoadCollection<TProperty>(TEntity entity, Expression<Func<TEntity, IEnumerable<TProperty>>> collectionProperty) where TProperty : class;
        Task LoadCollectionAsync<TProperty>(TEntity entity, Expression<Func<TEntity, IEnumerable<TProperty>>> collectionProperty, CancellationToken cancellationToken) where TProperty : class;
        void LoadReference<TProperty>(TEntity entity, Expression<Func<TEntity, TProperty>> referenceProperty) where TProperty : class;
        Task LoadReferenceAsync<TProperty>(TEntity entity, Expression<Func<TEntity, TProperty>> referenceProperty, CancellationToken cancellationToken) where TProperty : class;
        void Update(TEntity entity, bool saveNow = false);
        Task UpdateAsync(TEntity entity, CancellationToken cancellationToken, bool saveNow = false);
        void UpdateRange(IEnumerable<TEntity> entities, bool saveNow = false);
        Task UpdateRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken, bool saveNow = false);
    }
}