using TestPredikt.Domain.Models.Core;

namespace TestPredikt.Models
{
    public class Lookup : BaseEntity
    {
        public string TypeTitle { get; set; } 
        public int TypeId { get; set; } 
        public string Aux1 { get; set; }
        public string? Aux2 { get; set; } 
        public string? Aux3 { get; set; } 
    }
}
