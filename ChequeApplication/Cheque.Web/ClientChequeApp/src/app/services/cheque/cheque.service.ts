import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { CurrencyConversionDto } from 'src/app/models/CurrencyConversionDto';
import { ChequeDetailDto } from 'src/app/models/ChequeDetailDto';


// Http Options
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': '*',
  })
}

// Globally Define Http Web Api Url
const baseUrl = 'https://localhost:41263/api';

@Injectable({
  providedIn: 'root'
})

export class ChequeService {

  constructor(private http: HttpClient) { }

  // User related services
  getCheque(Id: number | null | undefined): Observable<ChequeDetailDto> {
    return this.http.get<ChequeDetailDto>(baseUrl + "/ChequeDetail/" + Id, httpOptions);
  }

  getCheques(): Observable<ChequeDetailDto> {
    return this.http.get<ChequeDetailDto>(baseUrl + "/ChequeDetail", httpOptions);
  }

  postCheque(model: ChequeDetailDto): Observable<any> {
    return this.http.post<any>(baseUrl + "/ChequeDetail", model, httpOptions);
  }

  updateCheque(model: ChequeDetailDto): Observable<any> {
    return this.http.put<any>(baseUrl + "/ChequeDetail", model, httpOptions);
  }

  convertAmount(model: CurrencyConversionDto): Observable<any> {
    return this.http.post<any>(baseUrl + "/ChequeDetail/ConvertAmountAUD", model, httpOptions);
  }
  
}





