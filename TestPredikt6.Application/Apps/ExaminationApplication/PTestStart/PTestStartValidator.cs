using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper.Configuration;
using FluentValidation;
using TestPredikt.Application.Apps.ExaminationApplication.ExaminationStart;

namespace TestPredikt.Application.Apps.ExaminationApplication.PTestStart
{
    public class PTestStartValidator:  AbstractValidator<PTestStartCommand>
    {
        public PTestStartValidator()
        {
            // MediateR Validator

        }
    }
}
