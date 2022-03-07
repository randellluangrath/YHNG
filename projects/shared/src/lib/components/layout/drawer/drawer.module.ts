import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimeNgLibraryModule } from '../../../shared-primeng.module';
import { DrawerComponent } from './drawer.component';
import { DrawerHeaderComponent } from './drawer-header/drawer-header.component';
import { DrawerContentComponent } from './drawer-content/drawer-content.component';
import { DrawerFooterComponent } from './drawer-footer/drawer-footer.component';
import { SharedTypographyModule } from '../../typography/typography.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedFormsModule } from '../../../forms/forms.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DrawerComponent,
    DrawerHeaderComponent,
    DrawerContentComponent,
    DrawerFooterComponent,
  ],
  imports: [
    SharedPrimeNgLibraryModule,
    SharedTypographyModule,
    CommonModule,
    SharedFormsModule,
    FontAwesomeModule,
    FlexLayoutModule,
  ],
  exports: [
    DrawerComponent,
    DrawerHeaderComponent,
    DrawerContentComponent,
    DrawerFooterComponent,
  ],
  providers: [],
})
export class DrawerModule {}
