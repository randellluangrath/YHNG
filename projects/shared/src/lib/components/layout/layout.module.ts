import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFooterTemplateComponent } from './card/card-footer-template/card-footer-template.component';
import { CardHeaderTemplateComponent } from './card/card-header-template/card-header-template.component';
import { CardComponent } from './card/card.component';
import { SharedTypographyModule } from '../typography/typography.module';
import { KpiCardComponent } from './kpi-card/kpi-card.component';
import { SharedPrimeNgLibraryModule } from '../../shared-primeng.module';
import { DrawerModule } from './drawer/drawer.module';
import { GeneralLayoutModule } from './general-layout/general-layout.module';
import { SpaceItemComponent } from './space/space-item/space-item.component';
import { SpaceComponent } from './space/space.component';
import { DisplayValueComponent } from './display-value/display-value.component';
import { DisplayValueContainerComponent } from './display-value-container/display-value-container.component';
import { WellComponent } from './well/well.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { SidebarLayoutHeaderComponent } from './sidebar-layout/sidebar-layout-header/sidebar-layout-header.component';
import { SidebarLayoutFooterComponent } from './sidebar-layout/sidebar-layout-footer/sidebar-layout-footer.component';
import { SharedFormsModule } from '../../forms/forms.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MainNavigationHeaderComponent } from './main-navigation/main-navigation-header/main-navigation-header.component';
import { MainNavigationFooterComponent } from './main-navigation/main-navigation-footer/main-navigation-footer.component';
import { MainNavigationItemComponent } from './main-navigation/main-navigation-item/main-navigation-item.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayPanelComponent } from './overlay-panel/overlay-panel.component';
import { CardContentTemplateComponent } from './card/card-content-template/card-content-template.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderTemplateComponent,
    CardFooterTemplateComponent,
    SpaceComponent,
    SpaceItemComponent,
    KpiCardComponent,
    DisplayValueComponent,
    DisplayValueContainerComponent,
    WellComponent,
    SidebarLayoutComponent,
    SidebarLayoutHeaderComponent,
    SidebarLayoutFooterComponent,
    MainNavigationComponent,
    MainNavigationHeaderComponent,
    MainNavigationFooterComponent,
    MainNavigationItemComponent,
    OverlayPanelComponent,
    CardContentTemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedTypographyModule,
    SharedPrimeNgLibraryModule,
    SharedFormsModule,
    FontAwesomeModule,
    FlexLayoutModule,
  ],
  exports: [
    CardComponent,
    CardHeaderTemplateComponent,
    CardFooterTemplateComponent,
    CardContentTemplateComponent,
    DisplayValueComponent,
    DisplayValueContainerComponent,
    WellComponent,
    GeneralLayoutModule,
    SpaceComponent,
    SpaceItemComponent,
    KpiCardComponent,
    DrawerModule,
    SidebarLayoutComponent,
    SidebarLayoutHeaderComponent,
    SidebarLayoutFooterComponent,
    MainNavigationComponent,
    MainNavigationHeaderComponent,
    MainNavigationFooterComponent,
    MainNavigationItemComponent,
    OverlayPanelComponent,
  ],
  providers: [],
})
export class SharedLayoutModule {}
