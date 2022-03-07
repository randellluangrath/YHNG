import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css'],
})
export class NumberFieldComponent extends BaseFieldComponent implements OnInit {
  @Input()
  min: number;

  @Input()
  max: number;

  @Input()
  suffix: string;

  @Input()
  addOn: boolean;

  @Input()
  addOnControl: FormControl;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
