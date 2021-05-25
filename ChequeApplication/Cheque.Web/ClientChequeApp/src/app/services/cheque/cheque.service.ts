import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ChequeDetailDtoDto } from 'src/app/models/ChequeDetailDto';
import { CurrencyConversionDto } from 'src/app/models/CurrencyConversionDto';


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
const baseUrl = 'https://localhost:44341/api';

@Injectable({
  providedIn: 'root'
})

export class ChequeService {

  constructor(private http: HttpClient) { }

  // User related services
  getCheque(Id: number | null | undefined): Observable<ChequeDetailDtoDto> {
    return this.http.get<ChequeDetailDtoDto>(baseUrl + "/ChequeDetail/" + Id, httpOptions);
  }

  getCheques(): Observable<ChequeDetailDtoDto> {
    return this.http.get<ChequeDetailDtoDto>(baseUrl + "/ChequeDetail", httpOptions);
  }

  postCheque(model: ChequeDetailDtoDto): Observable<any> {
    return this.http.post<any>(baseUrl + "/ChequeDetail", model, httpOptions);
  }

  updateCheque(model: ChequeDetailDtoDto): Observable<any> {
    return this.http.put<any>(baseUrl + "/ChequeDetail", model, httpOptions);
  }

  convertAmount(model: CurrencyConversionDto): Observable<any> {
    return this.http.post<any>(baseUrl + "/ChequeDetail/ConvertAmountAUD", model, httpOptions);
  }
  
}





