import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedPrimeNgLibraryModule } from '../../shared-primeng.module';
import { SharedTypographyModule } from '../typography/typography.module';
import { LoaderComponent } from './loader/loader.component';
import { RiskIndicatorComponent } from './risk-indicator/risk-indicator.component';
import { TagComponent } from './tag/tag.component';
import { FileTypeIconComponent } from './file-type-icon/file-type-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DividerComponent } from './divider/divider.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CountComponent } from './count/count.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedPrimeNgLibraryModule,
    SharedTypographyModule,
    FontAwesomeModule,
  ],
  declarations: [
    LoaderComponent,
    RiskIndicatorComponent,
    TagComponent,
    FileTypeIconComponent,
    DividerComponent,
    AvatarComponent,
    CountComponent,
  ],
  exports: [
    LoaderComponent,
    RiskIndicatorComponent,
    TagComponent,
    FileTypeIconComponent,
    DividerComponent,
    AvatarComponent,
    CountComponent,
  ],
})
export class SharedPresentationalModule {}
