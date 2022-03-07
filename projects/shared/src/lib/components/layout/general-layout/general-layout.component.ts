import {
  Component,
  ContentChild,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { GeneralLayoutContentSidebarComponent } from './general-layout-content-sidebar/general-layout-content-sidebar.component';
import { GeneralLayoutHeaderComponent } from './general-layout-header/general-layout-header.component';
import { GeneralLayoutNavigationComponent } from './general-layout-navigation/general-layout-navigation.component';
import { GeneralLayoutSidebarComponent } from './general-layout-sidebar/general-layout-sidebar.component';

@Component({
  selector: 'yh-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GeneralLayoutComponent implements OnInit {
  @ContentChild(GeneralLayoutNavigationComponent)
  navigationComponent: GeneralLayoutNavigationComponent;

  @ContentChild(GeneralLayoutSidebarComponent)
  sidebarComponent: GeneralLayoutSidebarComponent;

  @ContentChild(GeneralLayoutHeaderComponent)
  headerComponent: GeneralLayoutHeaderComponent;

  @ContentChild(GeneralLayoutContentSidebarComponent)
  contentSidebarComponent: GeneralLayoutContentSidebarComponent;

  @Input()
  title: string;

  @Input()
  pad: boolean;

  @Input()
  sidebarPosition: 'left' | 'right' = 'right';

  constructor() {}

  ngOnInit(): void {}
}
