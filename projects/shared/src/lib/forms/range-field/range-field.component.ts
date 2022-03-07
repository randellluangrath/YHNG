import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-range-field',
  templateUrl: './range-field.component.html',
  styleUrls: ['./range-field.component.css'],
})
export class RangeFieldComponent extends BaseFieldComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
