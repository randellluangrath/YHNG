import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from '@fcs/app/domain/models/note';
import { ConfirmationService } from 'primeng/api';
import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';

@Component({
  selector: 'yh-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  @Input()
  note: INote;
  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  FileTypeIconType = FileTypeIconType;
  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}
  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Delete Note',
      rejectLabel: 'Cancel',
      message: `This Case Note has one or more attachments.
         Deleting this note will also remove its attachments.
         Are you sure you want to continue?`,
      icon: 'pi pi-exclamation-triangle popconfirm-icon',
      accept: () => {
        //confirm action
      },
      reject: () => {
        //reject action
      },
    });
  }
}
