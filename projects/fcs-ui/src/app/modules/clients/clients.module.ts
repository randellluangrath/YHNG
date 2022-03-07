import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSearchComponent } from './client-search/client-search.component';
import { SharedModule } from '@fcs/app/@shared';
import { ClientSearchItemComponent } from './client-search/client-search-item/client-search-item.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CientManagementComponent } from './cient-management/cient-management.component';
import { ClientListComponent } from './client-list/client-list.component';
import { OverviewComponent } from './sections/overview/overview.component';
import { ClientManagementRoutingModule } from './client-management-routing.module';
import { TransactionsComponent } from './sections/transactions/transactions.component';
import { LinkAnalysisComponent } from './sections/link-analysis/link-analysis.component';
import { BeneficialOwnerComponent } from './sections/beneficial-owner/beneficial-owner.component';
import { MapViewComponent } from './sections/map-view/map-view.component';
import { AlertHistoryComponent } from './sections/alert-history/alert-history.component';
import { RiskHistoryComponent } from './sections/risk-history/risk-history.component';
import { DocumentsComponent } from './sections/documents/documents.component';
import { MergeClientsComponent } from './sections/link-analysis/merge-clients/merge-clients.component';
import { UnmergeClientsComponent } from './sections/link-analysis/unmerge-clients/unmerge-clients.component';
import { DueDiligenceComponent } from './sections/due-diligence/due-diligence.component';
import { EddSchedulerComponent } from './sections/enhanced-due-diligence/edd-scheduler/edd-scheduler.component';
import { EnhancedDueDiligenceComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence.component';
import { EnhancedDueDiligenceCommentsComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence-comments/enhanced-due-diligence-comments.component';
import { EnhancedDueDiligenceItemComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence-item/enhanced-due-diligence-item.component';
import { EnhancedDueDiligenceCommentItemComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence-comment-item/enhanced-due-diligence-comment-item.component';
import { EnhancedDueDiligenceCommentFormComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence-comment-form/enhanced-due-diligence-comment-form.component';
import { CommentsComponent } from './sections/comments/comments.component';
import { CommentItemComponent } from './sections/comments/comment-item/comment-item.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxPanZoomModule } from 'ngx-panzoom';
import { CustomerRiskFactorsDetailsComponent } from './sections/enhanced-due-diligence/customer-risk-factors-details/customer-risk-factors-details.component';
import { CaseHistoryComponent } from './sections/case-history/case-history.component';
import { CaseHistoryItemComponent } from './sections/case-history/case-history-item/case-history-item.component';
import { CaseHistoryDetailsComponent } from './sections/case-history/case-history-details/case-history-details.component';
import { SarHistoryComponent } from './sections/sar-history/sar-history.component';
import { SarHistoryWorkComponent } from './sections/sar-history/sar-history-work-item/sar-history-item.component';
import { SarHistoryDetailsComponent } from './sections/sar-history/sar-history-details/sar-history-details.component';
import { OverviewDetailsComponent } from './sections/overview/overview-details/overview-details.component';
import { ClientHistoryComponent } from './sections/client-history/client-history.component';
import { RelationshipsComponent } from './sections/relationships/relationships.component';

@NgModule({
  declarations: [
    ClientSearchComponent,
    ClientSearchItemComponent,
    ClientDetailsComponent,
    CientManagementComponent,
    ClientListComponent,
    OverviewComponent,
    TransactionsComponent,
    LinkAnalysisComponent,
    BeneficialOwnerComponent,
    MapViewComponent,
    AlertHistoryComponent,
    RiskHistoryComponent,
    DocumentsComponent,
    MergeClientsComponent,
    UnmergeClientsComponent,
    DueDiligenceComponent,
    EddSchedulerComponent,
    EnhancedDueDiligenceComponent,
    EnhancedDueDiligenceCommentsComponent,
    EnhancedDueDiligenceItemComponent,
    EnhancedDueDiligenceCommentItemComponent,
    EnhancedDueDiligenceCommentFormComponent,
    CommentsComponent,
    CommentItemComponent,
    CustomerRiskFactorsDetailsComponent,
    CaseHistoryComponent,
    CaseHistoryItemComponent,
    CaseHistoryDetailsComponent,
    SarHistoryComponent,
    SarHistoryWorkComponent,
    SarHistoryDetailsComponent,
    OverviewDetailsComponent,
    ClientHistoryComponent,
    RelationshipsComponent,
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    SharedModule,
    NgxGraphModule,
    NgxPanZoomModule,
  ],
  exports: [ClientSearchComponent, ClientDetailsComponent],
})
export class ClientsModule {}
