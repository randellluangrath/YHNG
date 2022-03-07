import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedPrimeNgLibraryModule } from './shared-primeng.module';
import { SharedLayoutModule } from './components/layout/layout.module';
import { SharedTypographyModule } from './components/typography/typography.module';
import { SharedFormsModule } from './forms/forms.module';
import { SharedPresentationalModule } from './components/presentation/shared-presentational.module';
import { PhonePipe } from './pipes/phone.pipe';
import { TreeModule } from '@circlon/angular-tree-component';
import { ResponsiveModule } from 'ngx-responsive';
import { AddressPipe } from './pipes/address.pipe';
import { LocalDatePipe } from './pipes/date.pipe';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { InViewDirective } from './directives/in-view.directive';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { AngularEditorModule } from '@kolkov/angular-editor';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  declarations: [PhonePipe, AddressPipe, LocalDatePipe, InViewDirective],
  exports: [
    PhonePipe,
    AddressPipe,
    LocalDatePipe,
    SharedPrimeNgLibraryModule,
    FontAwesomeModule,
    FlexLayoutModule,
    SharedTypographyModule,
    SharedLayoutModule,
    SharedFormsModule,
    SharedPresentationalModule,
    TreeModule,
    ResponsiveModule,
    AngularStickyThingsModule,
    InViewDirective,
  ],
})
export class SharedLibraryModule {}
