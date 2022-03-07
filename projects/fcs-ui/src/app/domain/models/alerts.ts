export enum AlertType {
  BSA,
  Fraud,
}

export enum AlertStatus {
  Open,
  Closed,
  Pending,
}

export interface IAlert {
  id: number;
  riskScore: number;
  title: string;
  amount: number;
  type: AlertType;
  scenario: string;
  scenarioType: string;
  subType: string;
  timestamp: string;
  status: AlertStatus;
  children: IAlert[];
}

export class Alert implements IAlert {
  id: number;
  riskScore: number;
  title: string;
  amount: number;
  type: AlertType;
  scenario: string;
  scenarioType: string;
  subType: string;
  timestamp: string;
  status: AlertStatus;
  children: IAlert[];

  isLow(): boolean {
    return this.riskScore < 30;
  }
  isMedium(): boolean {
    return this.riskScore > 30 && this.riskScore < 60;
  }
  isHigh(): boolean {
    return this.riskScore > 60;
  }
}

export interface IAlertHistoryRecord {
  created: string;
  scenario: string;
  details: string;
  risk: number;
  status: string;
  closedBy: string;
  closedReason: string;
}
