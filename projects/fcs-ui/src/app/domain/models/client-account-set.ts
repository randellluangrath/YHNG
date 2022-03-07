export interface ISetGrouping {
  id: number;
  name: string;
  type: SetGroupType;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  criteria: string[];
}

export enum SetGroupType {
  Client,
  Account,
}
