using TestPredikt.Domain.Models.Security;
using System.Threading.Tasks;
using TestPredikt.Application.Apps.SecurityApplication.Models;

namespace TestPredikt.Application.Apps.SecurityApplication.Authentication
{
    public interface IJwtService
    {
        Task<AccessTokenViewModel> GenerateAsync(User user);
    }
}