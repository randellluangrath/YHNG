import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { FieldOption } from '../../models/models';

@Component({
  selector: 'yh-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css'],
})
export class CheckboxGroupComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  required: boolean;

  @Input()
  options: FieldOption<string>[] = [];

  @Input()
  formArrayName: string;

  @Input()
  formGroup: FormGroup;

  @Input()
  inline: boolean;

  constructor() {}

  ngOnInit(): void {}

  getControl(index: number): FormControl {
    return (this.formGroup.get(this.formArrayName) as FormArray).controls[
      index
    ] as FormControl;
  }
}
