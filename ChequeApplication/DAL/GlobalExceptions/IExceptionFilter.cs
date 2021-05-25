using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.GlobalExceptions
{
    public interface IExceptionFilter : IFilterMetadata
    {
        void OnException(ExceptionContext context);
    }
}
