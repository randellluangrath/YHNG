import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { DisplayValueComponent } from '../display-value/display-value.component';

@Component({
  selector: 'yh-display-value-container',
  templateUrl: './display-value-container.component.html',
  styleUrls: ['./display-value-container.component.scss'],
  host: {
    '[class.horizontal]': 'horizontal',
  },
})
export class DisplayValueContainerComponent implements OnInit, AfterViewInit {
  @ContentChildren(DisplayValueComponent)
  children: DisplayValueComponent[];

  @Input()
  horizontal: boolean;

  @Input()
  inline: boolean;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
