import { IAddress } from './address';

export interface ILocation {
  name: string;
  branchNumber: string;
  region: string;
  address: IAddress;
  phone: string;
}
