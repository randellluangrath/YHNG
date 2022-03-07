import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'yh-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-typography-title';

  @Input()
  title: string;

  @Input()
  level: number = 1;

  @Input()
  subtitle: string;

  @Input()
  knockout: boolean;

  constructor() {}

  ngOnInit(): void {}
}
