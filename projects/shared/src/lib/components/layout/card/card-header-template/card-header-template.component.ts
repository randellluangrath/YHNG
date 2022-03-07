import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-card-header-template',
  templateUrl: './card-header-template.component.html',
  styleUrls: ['./card-header-template.component.scss'],
  host: {
    '[class.is-small]': "size==='small'",
  },
})
export class CardHeaderTemplateComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-card-header-template';

  @Input()
  size: string = 'large';

  constructor() {}

  ngOnInit(): void {}
}
