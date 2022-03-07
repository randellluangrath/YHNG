import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MenuModule } from 'primeng/menu';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TimelineModule } from 'primeng/timeline';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { BadgeModule } from 'primeng/badge';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CarouselModule } from 'primeng/carousel';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogModule,
} from 'primeng/dynamicdialog';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { StepsModule } from 'primeng/steps';
import { PickListModule } from 'primeng/picklist';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ConfirmationService,
    MessageService,
    DialogService,
    DynamicDialogConfig,
  ],
  exports: [
    TableModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    SidebarModule,
    InputTextModule,
    InputTextareaModule,
    SplitButtonModule,
    InputMaskModule,
    AvatarModule,
    AvatarGroupModule,
    FileUploadModule,
    CheckboxModule,
    TagModule,
    CalendarModule,
    MultiSelectModule,
    TabViewModule,
    AccordionModule,
    OverlayPanelModule,
    MessageModule,
    MessagesModule,
    TabMenuModule,
    TreeModule,
    TreeTableModule,
    ContextMenuModule,
    ConfirmPopupModule,
    MenuModule,
    VirtualScrollerModule,
    TimelineModule,
    InputNumberModule,
    SliderModule,
    BadgeModule,
    TooltipModule,
    RadioButtonModule,
    DialogModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    SelectButtonModule,
    ToggleButtonModule,
    CarouselModule,
    StepsModule,
    PickListModule,
    ScrollPanelModule,
    OrganizationChartModule,
    DividerModule,
    ListboxModule,
    ChipsModule,
    ChipModule,
  ],
})
export class SharedPrimeNgLibraryModule {}
