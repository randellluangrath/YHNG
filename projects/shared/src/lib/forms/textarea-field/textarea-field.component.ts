import { Component, Input, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
})
export class TextareaFieldComponent
  extends BaseFieldComponent
  implements OnInit
{
  @Input()
  small: boolean;

  @Input()
  enableCharacterCounter: boolean = true;

  @Input()
  max: number = 250;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
