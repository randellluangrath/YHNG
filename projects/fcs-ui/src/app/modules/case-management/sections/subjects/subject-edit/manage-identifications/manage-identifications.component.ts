import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ISubject,
  ISubjectIdentification,
} from '@fcs/app/domain/models/subject';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-manage-identifications',
  templateUrl: './manage-identifications.component.html',
  styleUrls: ['./manage-identifications.component.scss'],
})
export class ManageIdentificationsComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  @Input()
  subject: ISubject;

  trashed: Set<ISubjectIdentification> = new Set<ISubjectIdentification>();

  constructor() {}

  ngOnInit(): void {}

  showFormPanel(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }

  saveItem(item: ISubjectIdentification): void {
    this.subject.identifications.push(item);
    this.overlayPanel.hide();
  }
  cancelItem(): void {
    this.overlayPanel.hide();
  }

  markForDelete(id: ISubjectIdentification): void {
    if (this.trashed.has(id)) {
      this.trashed.delete(id);
    } else {
      this.trashed.add(id);
    }
  }
}
