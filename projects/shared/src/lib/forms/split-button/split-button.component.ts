import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'yh-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.css'],
})
export class SplitButtonComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  options: MenuItem[] = [];

  @Output()
  clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick(): void {
    this.clicked.emit(true);
  }
}
