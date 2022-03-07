import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { INote } from '@fcs/app/domain/models/note';

@Component({
  selector: 'yh-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.scss'],
})
export class NotesEditComponent implements OnInit {
  @Input()
  note: INote;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  fgNote: FormGroup;
  fcNote: FormControl = new FormControl('');
  fcAttachment: FormControl = new FormControl('');
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgNote = this.fb.group({
      fcNote: this.fcNote,
      fcAttachment: this.fcAttachment,
    });
  }
  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
