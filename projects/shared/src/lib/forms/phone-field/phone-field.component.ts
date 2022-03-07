import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-phone-field',
  templateUrl: './phone-field.component.html',
  styleUrls: ['./phone-field.component.scss'],
})
export class PhoneFieldComponent extends BaseFieldComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
