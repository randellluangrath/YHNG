export interface INote {
  id: number;
  title: string;
  note: string;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  attachmentId: number;
  attachmentName: string;
  attachmentType: string;
  isSelected: boolean;
}
