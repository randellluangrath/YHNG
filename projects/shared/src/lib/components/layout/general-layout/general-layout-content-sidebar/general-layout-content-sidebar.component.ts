import {
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'yh-general-layout-content-sidebar',
  templateUrl: './general-layout-content-sidebar.component.html',
  styleUrls: ['./general-layout-content-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GeneralLayoutContentSidebarComponent implements OnInit {
  @HostBinding('class')
  class: string = 'yh-general-layout-content-sidebar';
  constructor() {}

  ngOnInit(): void {}
}
