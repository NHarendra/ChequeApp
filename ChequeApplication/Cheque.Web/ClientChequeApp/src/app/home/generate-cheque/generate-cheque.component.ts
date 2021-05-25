import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CurrencyConversionDto } from 'src/app/models/CurrencyConversionDto';
import { ChequeService } from 'src/app/services/cheque/cheque.service';
import { AppConsts } from 'src/app/appConstant';
import { ChequeDetailDto } from 'src/app/models/ChequeDetailDto';
import { CurrencyDto } from 'src/app/models/CurrencyDto';


@Component({
  selector: 'app-generate-cheque',
  templateUrl: './generate-cheque.component.html',
  styleUrls: ['./generate-cheque.component.css']
})
export class GenerateChequeComponent implements OnInit {

  constructor(private chequeServiceProxy: ChequeService,private toaster: ToastrService) { }

  currencyArray: CurrencyDto[];
  chequeObj = <ChequeDetailDto>{};
  convertAmount = <CurrencyConversionDto>{};
  chequeDateObject: any;
  convertedAmount: any;

  ngOnInit() {
    this.currencyArray = [
      {label: 'AUD', value: 'AUD'},
      {label: 'US', value: 'US'},
      {label: 'INR', value: 'INR'},
      {label: ' Developer', value: ' Developer'}
     ];
  }

  //generate cheque
  generateCheque() {
     this.convertAmount.amount = this.chequeObj.amount;
     this.convertAmount.currency = this.chequeObj.currency;
     this.chequeServiceProxy.convertAmount(this.convertAmount).subscribe((data: any) => {
      this.convertedAmount = data;
     }, (error) => { 
      this.toaster.error(AppConsts.errorMsg, '',{timeOut: 3000});
    });
  }

  //saving cheque details
  saveChequeDetails() {
     this.chequeObj.amount = this.convertedAmount; 
     this.chequeObj.date = this.chequeDateObject;
     this.chequeServiceProxy.postCheque(this.chequeObj).subscribe((data: any) => {
      this.toaster.success(AppConsts.successSavedMsg, '',{timeOut: 3000});
    }, (error) => { 
     this.toaster.error(AppConsts.errorMsg, '',{timeOut: 3000});
   });
 }
  

  cancel(){

  }

}
