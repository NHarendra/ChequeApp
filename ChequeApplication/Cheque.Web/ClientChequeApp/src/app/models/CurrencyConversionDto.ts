export interface ICurrencyConversionDto {

    amount: number | undefined;
    currency: string | undefined;

  }
  
  export class CurrencyConversionDto implements ICurrencyConversionDto {

    amount!: number | undefined;
    currency!: string | undefined;

  }
  
  export interface CurrencyConversionDto {
    result: CurrencyConversionDto;
    targetUrl?: any;
    success: boolean;
    error?: any;
    unAuthorizedRequest: boolean;
    __abp: boolean;
  }
  