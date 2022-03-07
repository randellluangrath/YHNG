import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { INote } from '@fcs/app/domain/models/note';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.scss'],
  host: {
    '[class.is-selected]': 'note.isSelected',
  },
})
export class NotesItemComponent implements OnInit {
  dateIcon: IconDefinition = faCalendar;
  attachmentIcon: IconDefinition = faPaperclip;
  userIcon: IconDefinition = faUser;

  @Input()
  note: INote;

  @Output()
  onSelected: EventEmitter<INote> = new EventEmitter<INote>();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  onClick() {
    this.onSelected.emit(this.note);
  }
}
