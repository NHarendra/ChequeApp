using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Models.UserDefinedModels
{
   public class CurrencyConversionDto
    {
        [Required]
        public String Currency { get; set; }

        [Required]
        [Range(0, 10000000000000, ErrorMessage = "Please enter valid integer Number")]
        public virtual long Amount { get; set; }
    }
}
