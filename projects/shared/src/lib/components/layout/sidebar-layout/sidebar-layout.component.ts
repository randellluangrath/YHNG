import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { SidebarLayoutFooterComponent } from './sidebar-layout-footer/sidebar-layout-footer.component';
import { SidebarLayoutHeaderComponent } from './sidebar-layout-header/sidebar-layout-header.component';

@Component({
  selector: 'yh-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss'],
})
export class SidebarLayoutComponent implements OnInit {
  @Input()
  pad: boolean = true;

  @ContentChild(SidebarLayoutHeaderComponent)
  sidebarHeader: SidebarLayoutHeaderComponent;

  @ContentChild(SidebarLayoutFooterComponent)
  sidebarFooter: SidebarLayoutFooterComponent;

  constructor() {}

  ngOnInit(): void {}
}
