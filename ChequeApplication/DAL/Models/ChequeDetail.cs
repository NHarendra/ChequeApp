using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Models
{
   public class ChequeDetail : BaseEntity
    {
        [Required]
        public virtual String Payee { get; set; }

        [Required]
        [Range(0, 10000000000000, ErrorMessage = "Please enter valid decimal value")]
        public virtual decimal Amount { get; set; }

        [Required]
        public virtual String Currency { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public virtual DateTime Date { get; set; }
    }
}
