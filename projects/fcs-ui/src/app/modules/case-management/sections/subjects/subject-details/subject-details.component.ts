import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISubject } from '@fcs/app/domain/models/subject';

@Component({
  selector: 'yh-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss'],
})
export class SubjectDetailsComponent implements OnInit {
  @Input()
  subject: ISubject;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
