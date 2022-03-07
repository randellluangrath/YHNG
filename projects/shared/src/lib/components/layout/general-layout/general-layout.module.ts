import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralLayoutContentComponent } from './general-layout-content/general-layout-content.component';
import { GeneralLayoutHeaderComponent } from './general-layout-header/general-layout-header.component';
import { GeneralLayoutComponent } from './general-layout.component';
import { GeneralLayoutNavigationComponent } from './general-layout-navigation/general-layout-navigation.component';
import { GeneralLayoutSidebarComponent } from './general-layout-sidebar/general-layout-sidebar.component';
import { GeneralLayoutContentSidebarComponent } from './general-layout-content-sidebar/general-layout-content-sidebar.component';
import { ActionsComponent } from './actions/actions.component';
import { SharedTypographyModule } from '../../typography/typography.module';
import { GeneralLayoutHeaderTemplateComponent } from './general-layout-header/general-layout-header-template/general-layout-header-template.component';

@NgModule({
  declarations: [
    GeneralLayoutComponent,
    GeneralLayoutHeaderComponent,
    GeneralLayoutContentComponent,
    GeneralLayoutNavigationComponent,
    GeneralLayoutSidebarComponent,
    GeneralLayoutContentSidebarComponent,
    ActionsComponent,
    GeneralLayoutHeaderTemplateComponent,
  ],
  imports: [CommonModule, SharedTypographyModule],
  exports: [
    GeneralLayoutComponent,
    GeneralLayoutHeaderComponent,
    GeneralLayoutContentComponent,
    GeneralLayoutNavigationComponent,
    GeneralLayoutSidebarComponent,
    GeneralLayoutContentSidebarComponent,
    GeneralLayoutHeaderTemplateComponent,
    ActionsComponent,
  ],
  providers: [],
})
export class GeneralLayoutModule {}
