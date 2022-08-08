using Common;

namespace TestPredikt.Infrastructure.DataInitializer
{
    public interface IDataInitializer : IScopedDependency
    {
        void InitializeData();
    }
}
