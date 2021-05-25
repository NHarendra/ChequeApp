export interface ICurrencyDto {
    label: string | undefined;
    value: string | undefined;
  }
  
  export class CurrencyDto implements ICurrencyDto {
    label!: string | undefined;
    value!: string | undefined;
  }

    export interface CurrencyDtoObject {
    result: CurrencyDto;
    targetUrl?: any;
    success: boolean;
    error?: any;
    unAuthorizedRequest: boolean;
    __abp: boolean;
  }