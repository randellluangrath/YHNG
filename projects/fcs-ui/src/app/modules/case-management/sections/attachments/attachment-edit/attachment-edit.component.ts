import { FileStats } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAttachment, IUploadable } from '@fcs/app/domain/attachment';

@Component({
  selector: 'yh-attachment-edit',
  templateUrl: './attachment-edit.component.html',
  styleUrls: ['./attachment-edit.component.scss'],
})
export class AttachmentEditComponent implements OnInit {
  @Input()
  attachment: IAttachment;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  fgAttachment: FormGroup;
  fcNote: FormControl = new FormControl('');
  fcAttachment: FormControl = new FormControl('');

  attachments: IUploadable[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgAttachment = this.fb.group({
      fcNote: this.fcNote,
      fcAttachment: this.fgAttachment,
    });

    this.fcAttachment.valueChanges.subscribe((value: FileList) => {
      for (var i = 0, max = value.length; i < max; i++) {
        this.attachments.push({
          file: value[i],
          name: '',
        });
      }
    });
  }

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
