import { Component, Input, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-chips-field',
  templateUrl: './chips-field.component.html',
  styleUrls: ['./chips-field.component.css'],
})
export class ChipsFieldComponent extends BaseFieldComponent implements OnInit {
  @Input()
  options: ChipFieldModel[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {}
}

export class ChipFieldModel {
  values: string[];
  name: string;
}
