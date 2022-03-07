export class CaseType {
  id: number;
  typeName: string;
  subtypeName: string;
  description: string;
}

export class CaseStatus {
  id: number;
  name: string;
  description: string;
}

export class Case {
  caseId: number;
  caseName: string;
  caseStatus: CaseStatus;
  caseType: CaseType;
  caseDescription: string;
  alertId: string;
  primary: string;
  openDate: Date;
  closeDate: Date;
  dueDate: Date;
  highPriority: boolean;
  restricted: boolean;

  // For mock data
  internalNumber: number;
  createdBy: string;
  source: string;
  sarDecisionDate: Date;
  recentActivity: ICaseActivity[];
  tasks: ICaseTask[];
  relatedCases: number[];
}

export interface ICaseActivity {
  id: number;
  caseNumber: number;
  date: string;
  activity: string;
}

export interface ICaseTask {
  id: number;
  caseNumber: number;
  date: string;
  task: string;
  completed: boolean;
}

export interface ICaseAuditRecord {
  created: string;
  user: string;
  action: string;
  feature: string;
  description: string;
}
