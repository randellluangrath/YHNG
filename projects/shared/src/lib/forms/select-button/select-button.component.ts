import { Component, Input, OnInit } from '@angular/core';
import { FieldOption } from '../../models/models';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css'],
})
export class SelectButtonComponent
  extends BaseFieldComponent
  implements OnInit
{
  @Input()
  options: FieldOption<any>[];

  @Input()
  iconOnly: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
