using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.GlobalExceptions
{
   public class CustomeException : Exception
    {
        public CustomeException()
        { }

        public CustomeException(string message)
            : base(message)
        { }

        public CustomeException(string message, Exception innerException)
            : base(message, innerException)
        { }
    }
}
