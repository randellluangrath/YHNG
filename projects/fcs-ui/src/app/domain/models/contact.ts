import {
  ISubjectAddress,
  ISubjectIdentification,
  ISubjectPhone,
} from './subject';

export interface IContact {
  id: number;
  name: string;
  title: string;
  type: string;
  phone: string;
  emailAddresses: string[];
  websites: string[];
  phoneNumbers: ISubjectPhone[];
  addresses: ISubjectAddress[];
  identifications: ISubjectIdentification[];
  isSelected: boolean;
}

export enum ContactType {
  LawEnforcement = 1,
  InternalContact = 2,
  ExternalContact314b = 3,
  Victim = 4,
  Other = 5,
}
