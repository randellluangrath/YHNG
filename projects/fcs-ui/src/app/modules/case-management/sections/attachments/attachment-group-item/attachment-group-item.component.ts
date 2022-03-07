import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStickyNote, IconDefinition } from '@fortawesome/pro-light-svg-icons';
import { MenuItem } from 'primeng/api';
import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';
import { IAttachmentGroup } from '../attachments.component';

@Component({
  selector: 'yh-attachment-group-item',
  templateUrl: './attachment-group-item.component.html',
  styleUrls: ['./attachment-group-item.component.scss'],
})
export class AttachmentGroupItemComponent implements OnInit {
  @Input()
  group: IAttachmentGroup;

  @Output()
  edit: EventEmitter<IAttachmentGroup> = new EventEmitter<IAttachmentGroup>();

  @Output()
  delete: EventEmitter<IAttachmentGroup> = new EventEmitter<IAttachmentGroup>();

  FileTypeIconType = FileTypeIconType;

  noteIcon: IconDefinition = faStickyNote;

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        command: () => {
          this.edit.emit(this.group);
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        command: () => {
          this.delete.emit(this.group);
        },
      },
    ];
  }
}
