import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  required: boolean;

  @Input()
  description: string;

  @Input()
  disabled: boolean;

  @Input()
  inline: boolean;

  constructor() {}

  ngOnInit(): void {}
}
