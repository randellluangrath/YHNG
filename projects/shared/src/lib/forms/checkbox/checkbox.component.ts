import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    '[class.is-small]': 'small',
  },
})
export class CheckboxComponent extends BaseFieldComponent implements OnInit {
  @Input()
  small: boolean;

  @Input()
  strong: boolean;

  @Input()
  secondary: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  handleOnChange(event: any): void {
    this.control.setValue(event.checked);
  }
}
