using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using TestPredikt.Application.Apps.ExaminationApplication.ViewModels;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Application.Apps.ExaminationApplication.VTest.Start
{
    public class VTestStartCommandHandler : IRequestHandler<VTestStartCommand, OperationResult<List<VTestStartViewModel>>>
    {
        private readonly IUnitOfWork _uow;

        public VTestStartCommandHandler(IUnitOfWork unitOfWork)
        {
            _uow = unitOfWork;
        }
        public async Task<OperationResult<List<VTestStartViewModel>>> Handle(VTestStartCommand request, CancellationToken cancellationToken)
        {
            var exam = await _uow.Exams.Table.FirstOrDefaultAsync(f => f.Id == request.ExamId, cancellationToken);

            if (string.IsNullOrEmpty(exam.VTestAnswer))
            {
                var questions = await _uow.VTestQuestions.TableNoTracking.ToListAsync(cancellationToken);
                var query = questions.GroupBy(g => g.QuestionGroup)
                .Select(s => new VTestStartViewModel { Group = s.Key, Questions = s.Select(y => y).ToList() })
                .ToList();
                query.ForEach(f => f.Questions.ForEach(e => { e.CorrectOption = string.Empty; }));
                Random rand = new Random();
                var shuffled = query.OrderBy(_ => rand.Next()).ToList();
                exam.VTestAnswer = JsonConvert.SerializeObject(shuffled);
                await _uow.Exams.UpdateAsync(exam, cancellationToken);
                await _uow.CompleteAsync(cancellationToken);
                return new OperationResult<List<VTestStartViewModel>>(true, shuffled);
            }
            var vtest = JsonConvert.DeserializeObject<List<VTestStartViewModel>>(exam.VTestAnswer);
            return new OperationResult<List<VTestStartViewModel>>(true, vtest);
        }
    }
}
