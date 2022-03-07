import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IUploadable } from '@fcs/app/domain/attachment';
import { FileTypeIconType } from 'projects/shared/src/lib/components/presentation/file-type-icon/file-type-icon.component';

@Component({
  selector: 'yh-attachment-file-item',
  templateUrl: './attachment-file-item.component.html',
  styleUrls: ['./attachment-file-item.component.scss'],
})
export class AttachmentFileItemComponent implements OnInit {
  @Input()
  file: IUploadable;

  FileTypeIconType = FileTypeIconType;

  fgFile: FormGroup;
  fcName: FormControl = new FormControl();

  markForDelete: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFile = this.fb.group({
      fcName: this.fcName,
    });
  }

  toggleMarkForDeletion(): void {
    this.markForDelete = !this.markForDelete;

    if (this.markForDelete) {
      this.fcName.disable();
    } else {
      this.fcName.enable();
    }
  }

  getFileType(): FileTypeIconType {
    if (
      this.file.file.name.indexOf('.png') > 0 ||
      this.file.file.name.indexOf('.jpg') > 0 ||
      this.file.file.name.indexOf('.jpeg') > 0
    ) {
      return FileTypeIconType.Image;
    } else if (this.file.file.name.indexOf('.pdf') > 0) {
      return FileTypeIconType.PDF;
    } else if (
      this.file.file.name.indexOf('.doc') > 0 ||
      this.file.file.name.indexOf('.docx') > 0
    ) {
      return FileTypeIconType.Word;
    } else if (
      this.file.file.name.indexOf('.xls') > 0 ||
      this.file.file.name.indexOf('.xlsx') > 0
    ) {
      return FileTypeIconType.Excel;
    }

    return FileTypeIconType.Text;
  }
}
