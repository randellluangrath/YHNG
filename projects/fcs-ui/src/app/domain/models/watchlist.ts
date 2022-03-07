export interface IWatchlist {
  id: number;
  created: string;
  state: string;
  title: string;
  riskScore: number;
  type: string;
  list: string;
  match: string;
  assignedTo: string;
}

export class WatchList implements IWatchlist {
  id: number;
  created: string;
  state: string;
  title: string;
  riskScore: number;
  type: string;
  list: string;
  match: string;
  assignedTo: string;

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
