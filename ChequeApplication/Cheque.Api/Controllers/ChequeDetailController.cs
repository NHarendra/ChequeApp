using DAL.Context;
using DAL.GlobalExceptions;
using DAL.Models;
using DAL.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cheque.Api.Controllers
{
    public class ChequeDetailController : ControllerBase
    {

        #region Members
        /* Global Variables*/
        private IRepository<ChequeDetail> ChequeDetailRepository;
        #endregion

        #region constructor
        /* Contructor*/
        public ChequeDetailController(IRepository<ChequeDetail> ChequeDetailRepository)
        {
            this.ChequeDetailRepository = ChequeDetailRepository;
        }
        #endregion

        #region Methods
        /************************************ Start all Curd logic from here **************************************************/

        [HttpGet]
        [Route("")]
        public IEnumerable<ChequeDetail> GetAllChequeDetails()
        {
            IEnumerable<ChequeDetail> returnObj = null;
            try
            {
                returnObj = ChequeDetailRepository.GetAll().OrderByDescending(w => w.Id);
            }
            catch (Exception ex)
            {
                throw new CustomeException(ex.Message);
            }
            return returnObj;


        }

        [HttpGet]
        [Route("{ChequeDetailId}")]
        public ChequeDetail GetChequeDetailById(int ChequeDetailId) => ChequeDetailRepository.GetById(ChequeDetailId);

        [HttpPost]
        [Route("")]
        [AllowAnonymous]
        public void AddChequeDetail([FromBody] ChequeDetail chequeDetail)
        {
            try
            {
                ChequeDetailRepository.Insert(chequeDetail);
            }
            catch (Exception ex)
            {
                throw new CustomeException(ex.Message);
            }
        }

        [HttpPut]
        [Route("")]
        [AllowAnonymous]
        public void UpdateChequeDetail([FromBody] ChequeDetail chequeDetail)
        {
            try
            {
                ChequeDetailRepository.Update(chequeDetail);
            }
            catch (Exception ex)
            {
                throw new CustomeException(ex.Message);
            }
        }

        [HttpDelete]
        [Route("{ChequeDetailId}")]
        [AllowAnonymous]
        public void DeleteChequeDetail(int ChequeDetailId)
        {
            try
            {
                ChequeDetailRepository.Delete(ChequeDetailId);
            }
            catch (Exception ex)
            {
                throw new CustomeException(ex.Message);
            }
        }

        /************************************ End all Curd logic from here **************************************************/
        #endregion
    }
}
