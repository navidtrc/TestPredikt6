using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Common;
using MediatR;
using Newtonsoft.Json;
using TestPredikt.Infrastructure.Persistance.Core;
using System.Web;
using Microsoft.EntityFrameworkCore;

namespace TestPredikt.Application.Apps.ExaminationApplication.CTestQuestion
{
    public class CTestQuestionCommandHandler : IRequestHandler<CTestQuestionCommand, OperationResult>
    {
        private readonly IUnitOfWork _uow;


        public CTestQuestionCommandHandler(IUnitOfWork unitOfWork)
        {

            _uow = unitOfWork;
        }

        public async Task<OperationResult> Handle(CTestQuestionCommand request, CancellationToken cancellationToken)
        {
            var cTestRandomQuestionGroup = 0;
            while (true)
            {
                var cTestMinimumQuestionGroup = _uow.CTestQuestions.Table.Where(q => q.IsActive).Min(q => q.QuestionGroup);
                var cTestMaximumQuestionGroup = _uow.CTestQuestions.Table.Where(q => q.IsActive).Max(q => q.QuestionGroup);

                cTestRandomQuestionGroup = new Random().Next(cTestMinimumQuestionGroup, cTestMaximumQuestionGroup);
                if (_uow.CTestQuestions.Table.Any(q => q.IsActive && !q.IsDeleted && q.QuestionGroup == cTestRandomQuestionGroup))
                    break;
            }

            var questionTextList = await _uow.CTestQuestions.Table.Where(q =>
                q.IsActive && !q.IsDeleted && q.QuestionGroup == cTestRandomQuestionGroup).OrderBy(q=>q.Sequence).Select(q=>q.BlankedText).ToListAsync(cancellationToken);
            
            var questionIdList= await _uow.CTestQuestions.Table.Where(q =>
                q.IsActive && !q.IsDeleted && q.QuestionGroup == cTestRandomQuestionGroup).OrderBy(q => q.Sequence).Select(q => q.Id).ToListAsync(cancellationToken);

            var questionTitleList = await _uow.CTestQuestions.Table.Where(q =>
                q.IsActive && !q.IsDeleted && q.QuestionGroup == cTestRandomQuestionGroup).OrderBy(q => q.Sequence).Select(q => q.QuestionTitle).ToListAsync(cancellationToken);

            var questionJson = JsonConvert.SerializeObject(new { questionText = questionTextList, id= questionIdList, Title= questionTitleList });

            return new OperationResult(true, questionJson);
        }
    }
}
