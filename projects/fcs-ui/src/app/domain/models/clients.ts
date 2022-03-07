import { IAddress } from './address';

export interface IClient {
  id: number;
  clientId: string;
  externalId: string;
  title: string;
  type: string;
  tin: string;
  tinType: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  riskScore: number;
  clientAsOf: string;
  addresses: IAddress[];
  phoneNumbers: IPhone[];
  emails: string[];
  identifications: IClientIdentification[];
}

export class Client implements IClient {
  id: number;
  clientId: string;
  externalId: string;
  title: string;
  type: string;
  tin: string;
  tinType: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  riskScore: number;
  clientAsOf: string;
  addresses: IAddress[] = [];
  phoneNumbers: IPhone[] = [];
  emails: string[] = [];
  identifications: IClientIdentification[] = [];

  isLowRisk(): boolean {
    return this.riskScore < 30;
  }
  isMediumRisk(): boolean {
    return this.riskScore > 30 && this.riskScore < 60;
  }
  isHighRisk(): boolean {
    return this.riskScore > 60;
  }
}

export interface IPhone {
  phone: string;
  extension: string;
  type: string;
}

export interface IClientIdentification {
  type: string;
  typeOther?: string;
  number: string;
  country: string;
  state: string;
}
