using System.ComponentModel.DataAnnotations;

namespace TestPredikt.Domain.Common.Enums
{
    public enum eGender
    {
        [Display(Name = "Female")]
        Female,

        [Display(Name = "Male")]
        Male,
    }
}
