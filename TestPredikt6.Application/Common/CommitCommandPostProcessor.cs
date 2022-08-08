using TestPredikt.Infrastructure.Persistance.Core;
using MediatR.Pipeline;
using MediatR;

namespace TestPredikt.Application.Common
{
    public class CommitCommandPostProcessor<TRequest, TResponse> : IRequestPostProcessor<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        private readonly IUnitOfWork _uow;

        public CommitCommandPostProcessor(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task Process(TRequest request, TResponse response, CancellationToken cancellationToken)
        {
            if (request is ICommittableRequest)
            {
                var result = await _uow.CompleteAsync(cancellationToken);
            }
        }
    }
}
