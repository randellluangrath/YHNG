import { Component, Input, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-currency-field',
  templateUrl: './currency-field.component.html',
  styleUrls: ['./currency-field.component.css'],
})
export class CurrencyFieldComponent
  extends BaseFieldComponent
  implements OnInit
{
  @Input()
  min: number;

  @Input()
  max: number;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
