import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FieldOption } from '../../models/models';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-multiselect-field',
  templateUrl: './multiselect-field.component.html',
  styleUrls: ['./multiselect-field.component.scss'],
})
export class MultiSelectFieldComponent
  extends BaseFieldComponent
  implements OnInit
{
  @Input()
  options: FieldOption<string | number>[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.placeholder) {
      this.placeholder = `${this.label}...`;
    }
  }
}
