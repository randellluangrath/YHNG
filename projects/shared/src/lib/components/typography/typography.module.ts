import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [TextComponent, TitleComponent],
  imports: [CommonModule],
  exports: [TextComponent, TitleComponent],
  providers: [],
})
export class SharedTypographyModule {}
