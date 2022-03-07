export interface ITransaction {
  id: number;
  flagged: boolean;
  created: string;
  account: string;
  batch: number;
  sequence: string;
  effective: string;
  description: string;
  debit: number;
  credit: number;
  medium: string;
  occured: string;
  serial: number;
  code: string;
  type?: string;
}
