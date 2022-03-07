import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-risk-engine-scheduling-form',
  templateUrl: './risk-engine-scheduling-form.component.html',
  styleUrls: ['./risk-engine-scheduling-form.component.scss'],
})
export class RiskEngineSchedulingFormComponent implements OnInit {
  fgScheduling: FormGroup;
  fcType: FormControl = new FormControl();
  fcCustom: FormControl = new FormControl();

  schedulingOptions: FieldOption<string>[] = [
    new FieldOption('New CIF', 'New CIF'),
    new FieldOption('Daily', 'Daily'),
    new FieldOption('Weekly', 'Weekly'),
    new FieldOption('Monthly', 'Monthly'),
    new FieldOption('Quarterly', 'Quarterly'),
    new FieldOption('Semi Annually', 'Semi Annually'),
    new FieldOption('Annually', 'Annually'),
    new FieldOption('Custom', 'Custom'),
  ];

  customOptions: FieldOption<string>[] = [
    new FieldOption('Daily', 'Daily'),
    new FieldOption('Weekly', 'Weekly'),
    new FieldOption('Monthly', 'Monthly'),
    new FieldOption('Yearly', 'Yearly'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgScheduling = this.fb.group({
      fcType: this.fcType,
      fcCustom: this.fcCustom,
    });
  }
}
