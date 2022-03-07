import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TransactionMapWidgetComponent } from './widgets/transaction-map-widget/transaction-map-widget.component';
import { NotificationsWigetComponent } from './widgets/notifications-wiget/notifications-wiget.component';
import { SharedModule } from '../../@shared';
import { OpenItemsPanelComponent } from './open-items-panel/open-items-panel.component';
import { AlertItemComponent } from './open-items-panel/open-alerts/alert-item/alert-item.component';
import { OpenAlertsComponent } from './open-items-panel/open-alerts/open-alerts.component';
import { OpenCasesComponent } from './open-items-panel/open-cases/open-cases.component';
import { OpenSarsComponent } from './open-items-panel/open-sars/open-sars.component';
import { CaseItemComponent } from './open-items-panel/open-cases/case-item/case-item.component';
import { CaseTaskItemComponent } from './open-items-panel/open-cases/case-task-item/case-task-item.component';
import { OpenSarsItemComponent } from './open-items-panel/open-sars/open-sars-item/open-sars-item.component';
import { UpcomingEddWidgetComponent } from './widgets/upcoming-edd-widget/upcoming-edd-widget.component';
import { ColorGuideComponent } from './color-guide/color-guide.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    TransactionMapWidgetComponent,
    NotificationsWigetComponent,
    OpenItemsPanelComponent,
    AlertItemComponent,
    OpenAlertsComponent,
    OpenCasesComponent,
    OpenSarsComponent,
    CaseItemComponent,
    CaseTaskItemComponent,
    OpenSarsItemComponent,
    UpcomingEddWidgetComponent,
    ColorGuideComponent,
  ],
})
export class DashboardModule {}
