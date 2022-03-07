import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@fcs/app/shell/shell.service';
import { ResolutionComponent } from '../case-management/sections/resolution/resolution.component';
import { ClientListComponent } from './client-list/client-list.component';
import { AlertHistoryComponent } from './sections/alert-history/alert-history.component';
import { BeneficialOwnerComponent } from './sections/beneficial-owner/beneficial-owner.component';
import { CaseHistoryComponent } from './sections/case-history/case-history.component';
import { ClientHistoryComponent } from './sections/client-history/client-history.component';
import { CommentsComponent } from './sections/comments/comments.component';
import { DocumentsComponent } from './sections/documents/documents.component';
import { DueDiligenceComponent } from './sections/due-diligence/due-diligence.component';
import { EnhancedDueDiligenceComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence.component';
import { LinkAnalysisComponent } from './sections/link-analysis/link-analysis.component';
import { MapViewComponent } from './sections/map-view/map-view.component';
import { OverviewComponent } from './sections/overview/overview.component';
import { RelationshipsComponent } from './sections/relationships/relationships.component';
import { RiskHistoryComponent } from './sections/risk-history/risk-history.component';
import { SarHistoryComponent } from './sections/sar-history/sar-history.component';
import { TransactionsComponent } from './sections/transactions/transactions.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'client-management',
      children: [
        {
          path: '',
          component: ClientListComponent,
          data: { title: marker('Client Management') },
        },
        {
          path: ':id',

          children: [
            {
              path: 'overview',
              component: OverviewComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'relationships',
              component: RelationshipsComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'transactions',
              component: TransactionsComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'link-analysis',
              component: LinkAnalysisComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'beneficial-owner',
              component: BeneficialOwnerComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'map-view',
              component: MapViewComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'history',
              component: ClientHistoryComponent,
              data: { title: marker('Client Management') },
            },
            // {
            //   path: 'alert-history',
            //   component: AlertHistoryComponent,
            //   data: { title: marker('Client Management') },
            // },
            // {
            //   path: 'sar-history',
            //   component: SarHistoryComponent,
            //   data: { title: marker('Client Management') },
            // },
            // {
            //   path: 'risk-history',
            //   component: RiskHistoryComponent,
            //   data: { title: marker('Client Management') },
            // },
            {
              path: 'documents',
              component: DocumentsComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'due-diligence',
              component: DueDiligenceComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'enhanced-due-diligence',
              component: EnhancedDueDiligenceComponent,
              data: { title: marker('Client Management') },
            },
            {
              path: 'comments',
              component: CommentsComponent,
              data: { title: marker('Client Management') },
            },
          ],
        },
      ],
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ClientManagementRoutingModule {}
