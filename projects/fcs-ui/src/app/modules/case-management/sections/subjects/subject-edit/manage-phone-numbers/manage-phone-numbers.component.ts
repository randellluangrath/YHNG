import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ISubject, ISubjectPhone } from '@fcs/app/domain/models/subject';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-manage-phone-numbers',
  templateUrl: './manage-phone-numbers.component.html',
  styleUrls: ['./manage-phone-numbers.component.scss'],
})
export class ManagePhoneNumbersComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  @Input()
  subject: ISubject;

  primaryToggle: boolean;

  selectedPhone: ISubjectPhone;

  trashed: Set<ISubjectPhone> = new Set<ISubjectPhone>();

  constructor() {}

  ngOnInit(): void {
    this.subject.phoneNumbers = [];
  }

  showForm(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }

  saveItem(phone: ISubjectPhone): void {
    this.subject.phoneNumbers.push(phone);
    this.overlayPanel.hide();
  }
  cancelItem(): void {
    this.overlayPanel.hide();
  }

  markForDelete(phone: ISubjectPhone): void {
    if (this.trashed.has(phone)) {
      this.trashed.delete(phone);
    } else {
      this.trashed.add(phone);
    }
  }
}
