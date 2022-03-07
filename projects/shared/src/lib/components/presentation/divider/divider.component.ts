import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  host: {
    '[class.is-vertical]': 'vertical',
    '[class.has-title]': 'title!=null',
    '[class.is-background-bg]': 'background === "bg"',
    '[class.is-background-white]': 'background === "white"',
    '[class.place-left]': 'placement === "left"',
    '[class.place-center]': 'placement === "center"',
    '[class.place-right]': 'placement === "right"',
  },
})
export class DividerComponent implements OnInit {
  @Input()
  vertical: boolean;

  @Input()
  title: string;

  @Input()
  background: 'white' | 'bg';

  @Input()
  placement: 'left' | 'center' | 'right' = 'center';

  constructor() {}

  ngOnInit(): void {}
}
