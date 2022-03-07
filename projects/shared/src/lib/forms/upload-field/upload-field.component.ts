import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FileTypeIconType } from '../../components/presentation/file-type-icon/file-type-icon.component';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-upload-field',
  templateUrl: './upload-field.component.html',
  styleUrls: ['./upload-field.component.scss'],
  host: {
    '[class.hidden-select]': 'hideSelect',
  },
})
export class UploadFieldComponent extends BaseFieldComponent implements OnInit {
  @ViewChild(FileUpload)
  uploadField: FileUpload;

  @Input()
  multiple: boolean;

  @Input()
  mode: string;

  @Input()
  dropzoneTitle: string = 'Click Here or Drag & Drop Files';

  @Input()
  hideSelect: boolean;

  FileTypeIconType = FileTypeIconType;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.multiple) {
      this.mode = null;
    } else {
      this.mode = 'basic;';
    }
  }

  getFileName(e: File): string {
    return e.name;
  }

  selectFile(): void {
    this.uploadField.choose();
  }

  // Need to figure out what event this is
  // Primeng doesn't type it
  myUploader(event): void {
    this.control.setValue(event.files[0]);
  }

  handleOnSelect(event: OnSelectEvent): void {
    this.control.setValue(event.files);
  }
}

interface OnSelectEvent {
  currentFiles: File[];
  files: FileList;
  originalEvent: DragEvent;
}
