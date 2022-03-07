import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit, AfterViewInit {
  @Input()
  success: boolean;

  @Input()
  info: boolean;

  @Input()
  warning: boolean;

  @Input()
  danger: boolean;

  severity: string;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.success) {
      this.severity = 'success';
    } else if (this.info) {
      this.severity = 'info';
    } else if (this.warning) {
      this.severity = 'warning';
    } else if (this.danger) {
      this.severity = 'danger';
    }
  }
}
