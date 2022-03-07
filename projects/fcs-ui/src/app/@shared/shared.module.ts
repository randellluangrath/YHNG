import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedLibraryModule } from '@yellowhammer/shared';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedLibraryModule,
    FontAwesomeModule,
  ],
  declarations: [],
  exports: [SharedLibraryModule, FontAwesomeModule, FlexLayoutModule],
})
export class SharedModule {}
