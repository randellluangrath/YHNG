import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-edit-rule',
  templateUrl: './edit-rule.component.html',
  styleUrls: ['./edit-rule.component.scss'],
})
export class EditRuleComponent implements OnInit {
  @Input()
  name: string;

  options: FieldOption<string>[] = [
    new FieldOption('True', 'true'),
    new FieldOption('False', 'false'),
  ];

  fgRule: FormGroup;
  fcActive: FormControl = new FormControl();
  fcRedFlag: FormControl = new FormControl();
  fcDescription: FormControl = new FormControl();
  fcAmountRelevant: FormControl = new FormControl();
  fcLargeAmount: FormControl = new FormControl();
  fcRiskWeight: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgRule = this.fb.group({
      fcActive: this.fcActive,
      fcRedFlag: this.fcRedFlag,
      fcDescription: this.fcDescription,
      fcAmountRelevant: this.fcAmountRelevant,
      fcLargeAmount: this.fcLargeAmount,
      fcRiskWeight: this.fcRiskWeight,
    });
  }
}
