import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  ISubject,
  ISubjectAlternateName,
} from '@fcs/app/domain/models/subject';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-manage-alternate-names',
  templateUrl: './manage-alternate-names.component.html',
  styleUrls: ['./manage-alternate-names.component.scss'],
})
export class ManageAlternateNamesComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  @Input()
  subject: ISubject;

  trashed: Set<ISubjectAlternateName> = new Set<ISubjectAlternateName>();

  selectedName: ISubjectAlternateName;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  showForm(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }

  saveItem(name: ISubjectAlternateName): void {
    this.subject.alternateNames.push(name);
    this.overlayPanel.hide();
  }
  cancelItem(): void {
    this.overlayPanel.hide();
  }

  markForDelete(name: ISubjectAlternateName): void {
    if (this.trashed.has(name)) {
      this.trashed.delete(name);
    } else {
      this.trashed.add(name);
    }
  }
}
