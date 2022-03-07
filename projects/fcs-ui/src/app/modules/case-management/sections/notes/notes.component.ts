import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { INote } from '@fcs/app/domain/models/note';

@Component({
  selector: 'yh-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl('');
  fcUser: FormControl = new FormControl('');

  showNotesForm: boolean;

  notes: INote[] = [];
  selectedNote: INote;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcUser: this.fcUser,
    });

    for (var i = 0, max = 10; i < max; i++) {
      this.notes.push(this.generateNote(i));
    }
  }

  handleAddNew(): void {
    this.selectedNote = null;
    this.showNotesForm = true;
  }
  handleNoteSelected(note: INote): void {
    this.showNotesForm = false;

    if (this.selectedNote) {
      this.selectedNote.isSelected = false;
    }

    if (this.selectedNote !== note) {
      note.isSelected = true;
      this.selectedNote = note;
    } else {
      this.selectedNote = null;
    }
  }

  handleDetailsClose(event: MouseEvent): void {
    this.selectedNote = null;
  }
  handleFormClose(event: MouseEvent): void {
    this.showNotesForm = false;
  }

  generateNote(id: number): INote {
    return {
      id: id,
      title: 'Note Title',
      note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      created: new Date().toUTCString(),
      createdBy: 'jwood',
      updated: new Date().toUTCString(),
      updatedBy: 'jwood',
      attachmentId: id,
      attachmentName: 'Attachment Name',
      attachmentType: 'pdf',
      isSelected: false,
    };
  }
}
