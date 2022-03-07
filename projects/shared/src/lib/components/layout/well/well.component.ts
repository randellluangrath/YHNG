import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss'],
  host: {
    '[class.is-small]': 'size === "small"',
    '[class.is-medium]': 'size === "medium"',
    '[class.is-large]': 'size === "large"',
  },
})
export class WellComponent implements OnInit {
  @Input()
  size: WellSize = WellSize.Medium;

  constructor() {}

  ngOnInit(): void {}
}

export enum WellSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
