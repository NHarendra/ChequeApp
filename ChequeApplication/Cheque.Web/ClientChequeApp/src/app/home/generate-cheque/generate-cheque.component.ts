import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/cheque.service';

@Component({
  selector: 'app-generate-cheque',
  templateUrl: './generate-cheque.component.html',
  styleUrls: ['./generate-cheque.component.css']
})
export class GenerateChequeComponent implements OnInit {

  constructor() { }

  currencyArray: ICurrency[];
  userObj = <UserDto>{};

  ngOnInit() {
    
    this.currencyArray = [
      {label: 'AUD', value: 'AUD'},
      {label: 'US', value: 'US'},
      {label: 'INR', value: 'INR'},
      {label: ' Developer', value: ' Developer'}
     ];


  }

}
interface ICurrency {
  label: string;
  value: string;
}