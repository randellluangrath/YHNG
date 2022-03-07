import { Component, Input, OnInit } from '@angular/core';
import { FieldOption } from '../../models/models';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-radio-group-field',
  templateUrl: './radio-group-field.component.html',
  styleUrls: ['./radio-group-field.component.css'],
})
export class RadioGroupFieldComponent
  extends BaseFieldComponent
  implements OnInit
{
  @Input()
  options: FieldOption<string>[];

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
