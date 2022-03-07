import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FieldOption } from '../../models/models';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-dropdown-field',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent extends BaseFieldComponent implements OnInit {
  @Input()
  options: FieldOption<any>[];

  @Input()
  filter: boolean;

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.placeholder) {
      this.placeholder = `Select ${this.label}...`;
    }
  }
}
