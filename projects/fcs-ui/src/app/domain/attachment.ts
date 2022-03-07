import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';

export interface IAttachment {
  id: number;
  name: string;
  filePath: string;
  type: FileTypeIconType;
  note: string;
  created: string;
  createdBy: string;
  updated: string;
  updatedBy: string;
  isSelected: boolean;
}

export interface IUploadable {
  file: File;
  name: string;
}
