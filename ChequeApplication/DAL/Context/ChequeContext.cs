using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Context
{

    public class ChequeContext : DbContext
    {
        public DbSet<ChequeDetail> ChequeDetails { get; set; }

        public ChequeContext(DbContextOptions<ChequeContext> options) : base(options)
        {
        }
    }
}
