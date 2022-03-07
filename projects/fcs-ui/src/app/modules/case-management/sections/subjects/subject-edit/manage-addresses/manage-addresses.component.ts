import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ISubject, ISubjectAddress } from '@fcs/app/domain/models/subject';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.scss'],
})
export class ManageAddressesComponent implements OnInit {
  @Input()
  subject: ISubject;

  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  trashed: Set<ISubjectAddress> = new Set<ISubjectAddress>();

  constructor() {}

  ngOnInit(): void {}

  showForm(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }

  saveAddress(event: ISubjectAddress) {
    this.subject.addresses.push(event);
    this.overlayPanel.hide();
  }

  cancelAddress(): void {
    this.overlayPanel.hide();
  }

  markForDelete(name: ISubjectAddress): void {
    if (this.trashed.has(name)) {
      this.trashed.delete(name);
    } else {
      this.trashed.add(name);
    }
  }
}
