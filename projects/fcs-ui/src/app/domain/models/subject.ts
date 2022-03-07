export interface ISubject {
  id: number;
  entityName?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  dateOfBirth: string;
  gender: string;
  alternateNames: ISubjectAlternateName[];
  emailAddresses: ISubjectEmailAddress[];
  websites: ISubjectWebsite[];
  phoneNumbers: ISubjectPhone[];
  addresses: ISubjectAddress[];
  identifications: ISubjectIdentification[];
  isSelected: boolean;
  type: string;
}

export interface ISubjectPhone {
  phone: string;
  extension: string;
  type: string;
}

export interface ISubjectAddress {
  id: number;
  address: string;
  addressUnknown: boolean;
  city: string;
  cityUnknown: boolean;
  state: string;
  stateUnknown: boolean;
  zipCode: string;
  zipCodeUnknown: boolean;
  country: string;
  countryUnknown: boolean;
}

export interface ISubjectIdentification {
  type: string;
  typeOther?: string;
  number: string;
  country: string;
  state: string;
}

export interface ISubjectAlternateName {
  firstName?: string;
  middleInitial?: string;
  lastName?: string;
  suffix?: string;
  entity: string;
}

export interface ISubjectEmailAddress {
  email: string;
}

export interface ISubjectWebsite {
  website: string;
}
