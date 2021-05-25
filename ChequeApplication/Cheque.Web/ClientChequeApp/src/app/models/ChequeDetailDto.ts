export interface IChequeDetailDto {
    id: number | undefined;
    payee: string | undefined;
    amount: number | undefined;
    currency: string | undefined;
    date: moment.Moment | undefined;
  }
  
  export class ChequeDetailDto implements IChequeDetailDto {
    id!: number | undefined;
    payee!: string | undefined;
    amount!: number | undefined;
    currency!: string | undefined;
    date!: moment.Moment | undefined;
  }
  
  export interface ChequeDetailDtoObject {
    result: ChequeDetailDto;
    targetUrl?: any;
    success: boolean;
    error?: any;
    unAuthorizedRequest: boolean;
    __abp: boolean;
  }
  