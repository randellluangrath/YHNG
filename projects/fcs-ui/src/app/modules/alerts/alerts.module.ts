import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsListComponent } from './alerts-list/alerts-list.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { SharedModule } from '@fcs/app/@shared';
import { AlertsRoutingModule } from './alerts-routing.module';
import { CaseManagementModule } from '../case-management/case-management.module';
import { AlertDetailsTransactionsComponent } from './alert-details/alert-details-transactions/alert-details-transactions.component';
import { AlertDetailsAnalysisComponent } from './alert-details/alert-details-analysis/alert-details-analysis.component';
import { AlertDetailsHistoryComponent } from './alert-details/alert-details-history/alert-details-history.component';

@NgModule({
  declarations: [
    AlertsListComponent,
    AlertDetailsComponent,
    AlertDetailsTransactionsComponent,
    AlertDetailsAnalysisComponent,
    AlertDetailsHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlertsRoutingModule,
    CaseManagementModule,
  ],
})
export class AlertsModule {}
