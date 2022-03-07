import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAttachment } from '@fcs/app/domain/attachment';
import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';
import { IAttachmentGroup } from '../attachments.component';

@Component({
  selector: 'yh-attachment-details',
  templateUrl: './attachment-details.component.html',
  styleUrls: ['./attachment-details.component.scss'],
})
export class AttachmentDetailsComponent implements OnInit {
  @Input()
  group: IAttachmentGroup;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  FileTypeIconType = FileTypeIconType;

  firstAttachment: IAttachment;
  relatedAttachments: IAttachment[];

  constructor() {}

  ngOnInit(): void {
    this.firstAttachment = this.group.attachments[0];
    this.relatedAttachments = this.group.attachments.filter((v, i) => {
      return i > 0;
    });
  }
  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
