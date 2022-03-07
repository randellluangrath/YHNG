import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAttachment } from '@fcs/app/domain/attachment';
import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';
import * as faker from 'faker';

@Component({
  selector: 'yh-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss'],
})
export class AttachmentsComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();
  fcCategory: FormControl = new FormControl();

  selectedAttachment: IAttachmentGroup;

  showAttachmentForm: boolean = false;

  //   folderIcon: IconDefinition = faFolder;
  //   folderOpenIcon: IconDefinition = faFolderOpen;
  //   noteIcon: IconDefinition = faStickyNote;
  //   noNoteIcon: IconDefinition = falStickyNote;
  //   attachmentIcon: IconDefinition = faPaperclip;
  data: IAttachmentGroup[];

  FileTypeIconType = FileTypeIconType;

  showDrawer: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcCategory: this.fcCategory,
    });

    this.data = [this.generateGroup(1, 4), this.generateGroup(1, 1)];
  }

  selectItem(attachment: IAttachmentGroup): void {
    this.showAttachmentForm = false;

    if (this.selectedAttachment) {
      this.selectedAttachment.isSelected = false;
    }

    if (this.selectedAttachment === attachment) {
      this.selectedAttachment = null;
    } else {
      this.selectedAttachment = attachment;
      this.selectedAttachment.isSelected = true;
    }
  }
  handleAddNew(): void {
    this.selectedAttachment = null;
    this.showAttachmentForm = true;
  }

  handleFormClose(event: MouseEvent): void {
    this.showAttachmentForm = false;
  }

  handleDetailClose(event: MouseEvent): void {
    this.selectedAttachment = null;
  }

  editItem(item: IAttachmentGroup): void {
    this.selectedAttachment = item;
    this.showDrawer = true;
  }

  deleteItem(item: IAttachmentGroup): void {}
  handleDrawerCancel(): void {
    this.showDrawer = false;
  }

  private generateGroup(id: number, count: number): IAttachmentGroup {
    return {
      id: id,
      note: faker.lorem.sentences(),
      attachments: Array.from(new Array(count), (k, i) =>
        this.generateAttachment(i)
      ),
      isSelected: false,
    };
  }

  private generateAttachment(id: number): IAttachment {
    return {
      id: id,
      name: 'Name of Attachment',
      filePath: '',
      type: this.generateType(id),
      note: faker.lorem.sentence(),
      createdBy: 'jwood',
      created: new Date().toUTCString(),
      updatedBy: 'jwood',
      updated: new Date().toUTCString(),
      isSelected: false,
    };
  }

  private generateType(id: number): FileTypeIconType {
    switch (id) {
      case 0: {
        return FileTypeIconType.Audio;
      }
      case 1: {
        return FileTypeIconType.Excel;
      }
      case 2: {
        return FileTypeIconType.Image;
      }
      case 3: {
        return FileTypeIconType.PDF;
      }
      case 4: {
        return FileTypeIconType.Text;
      }
      case 5: {
        return FileTypeIconType.Video;
      }
      case 6: {
        return FileTypeIconType.Word;
      }
    }

    return FileTypeIconType.PDF;
  }
}

export interface IAttachmentGroup {
  id: number;
  note: string;
  attachments: IAttachment[];
  isSelected: boolean;
}
