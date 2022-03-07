import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContact } from '@fcs/app/domain/models/contact';
import { ISubject } from '@fcs/app/domain/models/subject';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFax, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'yh-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  @Input()
  contact: IContact;
  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  phoneIcon: IconDefinition = faPhone;
  faxIcon: IconDefinition = faFax;
  emailIcon: IconDefinition = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
