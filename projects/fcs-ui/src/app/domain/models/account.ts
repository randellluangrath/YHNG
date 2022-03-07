import { INote } from './note';

export interface IAccount {
  id: number;
  name: string;
  type: AccountType;
  // Expected value ex. SL030:DDA:1229599114:S
  accountId: string;
  institution: string;
  product: string;
  officer?: string;
  risk?: string;
  averageBalance: number;
  currentBalance: number;
  naics: number;
  msb: boolean;
  openedDate: string;
  closedDate: string;
  branch: string;
  relationship: string;
  notes?: INote[];
  addedBy: string;
  addedOnDate: string;
  createdDate: string;
  externalAccounts?: IExternalAccount[];
}

export enum AccountType {
  Internal,
  External,
}

export interface IExternalAccount {
  name: string;
  accountNumber: string;
  branch: string;
  tin: string;
}
