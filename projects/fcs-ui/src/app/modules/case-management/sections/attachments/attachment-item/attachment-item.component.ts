import { Component, Input, OnInit } from '@angular/core';
import { IAttachment } from '@fcs/app/domain/attachment';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons';
import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';

@Component({
  selector: 'yh-attachment-item',
  templateUrl: './attachment-item.component.html',
  styleUrls: ['./attachment-item.component.scss'],
})
export class AttachmentItemComponent implements OnInit {
  @Input()
  attachment: IAttachment;

  FileTypeIconType = FileTypeIconType;

  noteIcon: IconDefinition = faStickyNote;
  constructor() {}

  ngOnInit(): void {}
}
