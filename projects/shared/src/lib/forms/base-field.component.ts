import { Input, Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: 'app-base-field',
})
export class BaseFieldComponent {
  @Input()
  label: string;

  @Input()
  required: boolean;

  @Input()
  control: FormControl;

  @Input()
  placeholder: string = '';

  @Input()
  iconClass: string;

  @Input()
  readonly: string;

  @Input()
  inline: boolean;

  constructor() {}

  public shouldShowErrors(): boolean {
    return this.control && this.control.dirty && this.control.invalid;
  }
}
