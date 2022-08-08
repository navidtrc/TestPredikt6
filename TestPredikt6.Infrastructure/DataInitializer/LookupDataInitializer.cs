
using Newtonsoft.Json;
using TestPredikt.Infrastructure.Persistance.Core;

namespace TestPredikt.Infrastructure.DataInitializer
{
    public class LookupDataInitializer : IDataInitializer
    {
        private readonly IUnitOfWork _uow;
        public LookupDataInitializer(IUnitOfWork uow)
        {
            this._uow = uow;
        }

        public void InitializeData()
        {
            if (!_uow.Lookup.ExistType("InvoiceState").Data)
            {
                //_uow.Lookup.AddTypeValue("InvoiceState", "NotSent", "ارسال نشده");
                //_uow.Lookup.AddTypeValue("InvoiceState", "SentToRepair", "ارسال شده به تعمیرگاه");
                //_uow.Lookup.AddTypeValue("InvoiceState", "BackFromRepair", "برگشت از تعمیرگاه");
                //_uow.Lookup.AddTypeValue("InvoiceState", "NeedInquiry", "نیاز به استعلام");
                //_uow.Lookup.AddTypeValue("InvoiceState", "Repairing", "در حال تعمیر");
                //_uow.Lookup.AddTypeValue("InvoiceState", "Ready", "آماده");
                //_uow.Lookup.AddTypeValue("InvoiceState", "Done", "تحویل داده شده");
            }
            
           
        }
    }
}