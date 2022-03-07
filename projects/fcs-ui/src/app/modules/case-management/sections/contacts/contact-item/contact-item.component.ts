import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IContact } from '@fcs/app/domain/models/contact';

@Component({
  selector: 'yh-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-contact-item';

  @Input()
  contact: IContact;

  @Output()
  onSelected: EventEmitter<IContact> = new EventEmitter<IContact>();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  onClick() {
    this.onSelected.emit(this.contact);
  }
}
