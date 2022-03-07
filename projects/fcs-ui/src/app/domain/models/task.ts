import { IAttachment } from '../attachment';

export interface ITask {
  id: number;
  name: string;
  tags: string[];
  dueOn: string;
  description?: string;
  caseId?: number;
  note?: string;
  created: string;
  createdBy: string;
  assignedToUrl?: string;
  assignedTo: string;
  state: TaskState;
  isSelected: boolean;
  attachment?: IAttachment;
  comments: IComment[];
}

export enum TaskState {
  Unknown,
  Started,
  Completed,
  OnHold,
}

export interface IComment {
  comment: string;
  createdDate: string;
  createdBy: string;
}
