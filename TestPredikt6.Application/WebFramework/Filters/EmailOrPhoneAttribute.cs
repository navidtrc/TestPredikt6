﻿using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace TestPredikt.Application.WebFramework.Filters
{
    public class EmailOrPhoneAttribute : RegularExpressionAttribute
    {
        public EmailOrPhoneAttribute()
            : base(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$|^\+?\d{0,2}\-?\d{4,5}\-?\d{5,6}")
        {
            ErrorMessage = "Please provide a valid email address or phone number";
        }
    }
}
