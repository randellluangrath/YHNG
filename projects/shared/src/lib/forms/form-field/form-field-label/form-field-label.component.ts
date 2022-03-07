import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-form-field-label',
  templateUrl: './form-field-label.component.html',
})
export class FormFieldLabelComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  required: boolean;

  @Input()
  disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
