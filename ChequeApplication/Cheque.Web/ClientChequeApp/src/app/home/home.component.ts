import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeService } from '../services/cheque/cheque.service';
import { ErrorHandlerService } from '../services/ErrorHandler/error-handler.service';
import { ToastrService } from 'ngx-toastr';
import { AppConsts } from '../appConstant';
import { ChequeDetailDto } from '../models/ChequeDetailDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Constructor Call
  constructor(private errorHandler: ErrorHandlerService,private router: Router, private chequeServiceProxy: ChequeService,private toaster: ToastrService) { }

  // All Global Variables started
  cheques: ChequeDetailDto[];
  cols: any[];

  //Oninit Life Cycle hook started
  ngOnInit() {

    //Fetch all data of chequs 
    this.chequeServiceProxy.getCheques().subscribe((data: any) => {
      this.cheques = data;
      var obj = [];
      for (let i = 0; i < 7; i++) {
        obj.push(this.cheques[i]);
      }
      this.toaster.success(AppConsts.successFetchDataMsg, '',{timeOut: 3000});
     }, (error) => { 
      this.toaster.error(AppConsts.errorMsg, '',{timeOut: 3000});

      //Exception Handling error we can capture here and display for this repoen below code 
       //this.errorHandler.handleError(error);
       //this.toaster.error(this.errorHandler.errorMessage, '',{timeOut: 3000});
    });

    // Columns initialized
    this.cols = [
      { field: 'payee', header: 'payee' },
      { field: 'currency', header: 'currency' },
      { field: 'amount', header: 'amount' },
      { field: 'date', header: 'date' },
    ];

  }
  //Oninit Life Cycle hook ended

//pagination 
paginate(event)
{
  event.first;
  var obj = [];
  for (let i = event.first ; i < 7 + event.first; i++) {
    obj.push(this.cheques[i]);
  }
}
//Filetr 
onFilter(event,a) {
    if(this.cheques.length == event.filteredValue.length){
      var obj = [];
      for (let i = 0; i < 7; i++) {
        obj.push(this.cheques[i]);
      }
    }
    
}

  // Function redirect to generateCheque 
generateCheque(chequeId): void {
    if (chequeId > 0) {
      this.router.navigate(['chequeDetail', chequeId]);
    } else {
      this.router.navigate(['chequeDetail']);
    }
  }

}

