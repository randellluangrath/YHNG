export interface ISuspiciousActivityReport {
  name: string;
  activityType: string;
  ipAddresses: ISarSubjectIpAddress[];
  cyberEvents: ISarCyberEvent[];
  financialInstitutions: ISarFinancialIntstitution[];
}

export interface ISarSubjectIpAddress {
  address: string;
  date: string;
}

export interface ISarCyberEvent {
  type: string;
  typeOther: string;
  value: string;
  occured: string;
}

export interface ISarFinancialIntstitution {
  id: string;
  name: string;
  nameUnknown: boolean;
  type: string;
  typeOther: string;
  primaryFederalRegulator: string;
  typeOfGaming: string[];
  typeOfGamingOther: string;
  typeOfSecurities: string[];
  typeOfSecuritiesOther: string;
  identificationType: string;
  identificationNumber: string;
  role: string[];
  alternateName: string;
  tin: string;
  tinUnknown: boolean;
  tinType: string;
  address: string;
  addressUnknown: boolean;
  city: string;
  cityUnknown: boolean;
  state: string;
  zipCode: string;
  zipCodeUnknown: boolean;
  country: string;
  countryUnknown: boolean;
  fileNumber: string;
  loss: number;
  branches: ISarFinancialIntstitutionBranch[];
}

export interface ISarFinancialIntstitutionBranch {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  rssdNumber: string;
  role: string[];
}
