import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-risk-indicator',
  templateUrl: './risk-indicator.component.html',
  styleUrls: ['./risk-indicator.component.scss'],
})
export class RiskIndicatorComponent implements OnInit {
  @Input()
  low: boolean;
  @Input()
  medium: boolean;
  @Input()
  high: boolean;

  @Input()
  size: 'small' | 'large' = 'large';

  constructor() {}

  ngOnInit(): void {}
}
