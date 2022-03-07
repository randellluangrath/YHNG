import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yh-text',
  template: '<ng-content></ng-content>',
  styleUrls: ['./text.component.scss'],
  host: {
    '[class.uppercase]': 'uppercase',
    '[class.lowercase]': 'lowercase',
    '[class.strong]': 'strong',
    '[class.secondary]': 'secondary',
    '[class.success]': 'success',
    '[class.danger]': 'danger',
    '[class.warning]': 'warning',
    '[class.information]': 'information',
    '[class.pending]': 'pending',
    '[class.small]': 'small',
    '[class.bold]': 'bold',
    '[class.medium]': 'medium',
    '[class.compliment]': 'compliment',
    '[class.prevent-wrap]': 'preventWrap',
    '[class.center]': 'center',
  },
})
export class TextComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-typography-text';

  @Input()
  uppercase: boolean;

  @Input()
  lowercase: boolean;

  @Input()
  strong: boolean;

  @Input()
  bold: boolean;

  @Input()
  medium: boolean;

  @Input()
  small: boolean;

  @Input()
  secondary: boolean;

  @Input()
  information: boolean;

  @Input()
  success: boolean;

  @Input()
  pending: boolean;

  @Input()
  warning: boolean;

  @Input()
  danger: boolean;

  @Input()
  compliment: boolean;

  @Input()
  preventWrap: boolean;

  @Input()
  center: boolean;

  constructor() {}

  ngOnInit(): void {}
}
