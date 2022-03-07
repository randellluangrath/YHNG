import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'yh-button-field',
  templateUrl: './button-field.component.html',
  styleUrls: ['./button-field.component.css'],
})
export class ButtonFieldComponent extends BaseFieldComponent implements OnInit {
  @Output()
  onButtonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    super();
  }

  ngOnInit(): void {}

  handleButtonClick(): void {
    this.onButtonClick.emit();
  }
}
