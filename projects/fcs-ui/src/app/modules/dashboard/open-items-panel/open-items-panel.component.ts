import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as faker from 'faker';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';

@UntilDestroy()
@Component({
  selector: 'yh-open-items-panel',
  templateUrl: './open-items-panel.component.html',
  styleUrls: ['./open-items-panel.component.scss'],
})
export class OpenItemsPanelComponent implements OnInit {
  options: FieldOption<ViewState>[] = [
    new FieldOption('Alerts', ViewState.Alerts),
    new FieldOption('Cases', ViewState.Cases),
    new FieldOption('SARs', ViewState.Sars),
  ];

  fgOptions: FormGroup;
  fcOptions: FormControl = new FormControl();
  fcSort: FormControl = new FormControl();

  ViewState = ViewState;

  _viewState = ViewState.Alerts;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgOptions = this.fb.group({
      fcOptions: this.fcOptions,
      fcSort: this.fcSort,
    });

    this.fcOptions.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((state: ViewState) => {
        this._viewState = state;
      });
  }
}

enum ViewState {
  Alerts,
  Cases,
  Sars,
}
