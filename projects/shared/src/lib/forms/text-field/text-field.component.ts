import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent extends BaseFieldComponent implements OnInit {
  @Input()
  search: boolean;
  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.placeholder) {
      this.placeholder = `${this.label}...`;
    }
  }
}
