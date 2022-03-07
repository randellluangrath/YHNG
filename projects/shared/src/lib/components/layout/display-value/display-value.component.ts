import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'yh-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.scss'],
  host: {
    '[class.horizontal]': 'horizontal',
    '[class.inline]': 'inline',
  },
})
export class DisplayValueComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-display-value';

  @Input()
  icon: IconDefinition;

  @Input()
  label: string;

  @Input()
  horizontal: boolean;

  @Input()
  inline: boolean;

  constructor() {}

  ngOnInit(): void {}
}
