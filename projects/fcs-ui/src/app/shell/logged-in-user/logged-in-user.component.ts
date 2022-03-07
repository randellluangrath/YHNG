import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-logged-in-user',
  templateUrl: './logged-in-user.component.html',
  styleUrls: ['./logged-in-user.component.scss'],
})
export class LoggedInUserComponent implements OnInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  fgSwitchUser: FormGroup;
  fcUser: FormControl = new FormControl();

  showUserPanel: boolean;

  options: FieldOption<string>[] = [
    new FieldOption('BSA Manager', 'Manager'),
    new FieldOption('BSA Investigator', 'Investigator'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgSwitchUser = this.fb.group({
      fcUser: this.fcUser,
    });
  }

  toggleSwithUserPanel(): void {
    this.showUserPanel = !this.showUserPanel;
  }
}
