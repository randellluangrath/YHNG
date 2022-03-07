import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './sections/case-management-overview/overview.component';
import { CaseManagementListComponent } from './case-management-list/case-management-list.component';
import { CaseManagementRoutingModule } from './case-management-routing.module';
import { SharedModule } from '@fcs/app/@shared';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { ContactItemComponent } from './sections/contacts/contact-item/contact-item.component';
import { ContactEditComponent } from './sections/contacts/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './sections/contacts/contact-details/contact-details.component';
import { NotesComponent } from './sections/notes/notes.component';
import { NotesItemComponent } from './sections/notes/notes-item/notes-item.component';
import { NotesEditComponent } from './sections/notes/notes-edit/notes-edit.component';
import { NoteDetailsComponent } from './sections/notes/note-details/note-details.component';
import { TasksComponent } from './sections/tasks/tasks.component';
import { TaskEditComponent } from './sections/tasks/task-edit/task-edit.component';
import { TaskDetailsComponent } from './sections/tasks/task-details/task-details.component';
import { TaskItemComponent } from './sections/tasks/task-item/task-item.component';
import { AttachmentsComponent } from './sections/attachments/attachments.component';

import { AttachmentDetailsComponent } from './sections/attachments/attachment-details/attachment-details.component';
import { AttachmentEditComponent } from './sections/attachments/attachment-edit/attachment-edit.component';
import { AttachmentItemComponent } from './sections/attachments/attachment-item/attachment-item.component';
import { OverviewDetailsComponent } from './sections/case-management-overview/overview-details/overview-details.component';
import { SubjectsComponent } from './sections/subjects/subjects.component';
import { SubjectEditComponent } from './sections/subjects/subject-edit/subject-edit.component';
import { SubjectItemComponent } from './sections/subjects/subject-item/subject-item.component';
import { SubjectDetailsComponent } from './sections/subjects/subject-details/subject-details.component';
import { SubjectAddressEditComponent } from './sections/subjects/subject-edit/manage-addresses/subject-address-edit/subject-address-edit.component';

import { TaskGroupComponent } from './sections/tasks/task-group/task-group.component';
import { SubjectIdentificationEditComponent } from './sections/subjects/subject-edit/manage-identifications/subject-identification-edit/subject-identification-edit.component';
import { ManageIdentificationsComponent } from './sections/subjects/subject-edit/manage-identifications/manage-identifications.component';
import { SubjectIdentificationItemComponent } from './sections/subjects/subject-edit/manage-identifications/subject-identification-item/subject-identification-item.component';
import { ManageAddressesComponent } from './sections/subjects/subject-edit/manage-addresses/manage-addresses.component';
import { ManageAlternateNamesComponent } from './sections/subjects/subject-edit/manage-alternate-names/manage-alternate-names.component';
import { ManageEmailsComponent } from './sections/subjects/subject-edit/manage-emails/manage-emails.component';
import { ManageWebsitesComponent } from './sections/subjects/subject-edit/manage-websites/manage-websites.component';

import { ManagePhoneNumbersComponent } from './sections/subjects/subject-edit/manage-phone-numbers/manage-phone-numbers.component';
import { SubjectPhoneEditComponent } from './sections/subjects/subject-edit/manage-phone-numbers/subject-phone-edit/subject-phone-edit.component';
import { SubjectPhoneItemComponent } from './sections/subjects/subject-edit/manage-phone-numbers/subject-phone-item/subject-phone-item.component';
import { TransactionsComponent } from './sections/transactions/transactions.component';
import { AttachmentGroupItemComponent } from './sections/attachments/attachment-group-item/attachment-group-item.component';
import { AttachmentFileItemComponent } from './sections/attachments/attachment-edit/attachment-file-item/attachment-file-item.component';
import { SubjectAlternateNameEditComponent } from './sections/subjects/subject-edit/manage-alternate-names/subject-alternate-name-edit/subject-alternate-name-edit.component';
import { SubjectAlternateNameItemComponent } from './sections/subjects/subject-edit/manage-alternate-names/subject-alternate-name-item/subject-alternate-name-item.component';
import { ResponsiveModule } from 'ngx-responsive';
import { CaseManagementListFiltersComponent } from './case-management-list/case-management-list-filters/case-management-list-filters.component';
import { SubjectAddressItemComponent } from './sections/subjects/subject-edit/manage-addresses/subject-address-item/subject-address-item.component';
import { SubjectLookupComponent } from './sections/subjects/subject-edit/subject-lookup/subject-lookup.component';
import { AccountsComponent } from './sections/accounts/accounts.component';
import { AccountItemComponent } from './sections/accounts/account-item/account-item.component';
import { AccountDetailsComponent } from './sections/accounts/account-details/account-details.component';
import { TaskCommentItemComponent } from './sections/tasks/task-item/task-comment-item/task-comment-item.component';
import { TaskCommentFormComponent } from './sections/tasks/task-item/task-comment-form/task-comment-form.component';
import { TaskAssignmentFormComponent } from './sections/tasks/task-item/task-assignment-form/task-assignment-form.component';
import { ContactTypeLawEnforcementComponent } from './sections/contacts/contact-edit/types/contact-type-law-enforcement/contact-type-law-enforcement.component';
import { ContactTypeInternalComponent } from './sections/contacts/contact-edit/types/contact-type-internal/contact-type-internal.component';
import { ContactTypeExternalComponent } from './sections/contacts/contact-edit/types/contact-type-external/contact-type-external.component';
import { ContactTypeVictimComponent } from './sections/contacts/contact-edit/types/contact-type-victim/contact-type-victim.component';
import { CreateCaseDrawerComponent } from './create-case-drawer/create-case-drawer.component';
import { SubjectEntityFormComponent } from './sections/subjects/subject-edit/subject-entity-form/subject-entity-form.component';
import { SubjectIndividualFormComponent } from './sections/subjects/subject-edit/subject-individual-form/subject-individual-form.component';
import { ActivityComponent } from './sections/activity/activity.component';
import { AccountEditComponent } from './sections/accounts/account-edit/account-edit.component';
import { AccountDetailsInternalComponent } from './sections/accounts/account-details/account-details-internal/account-details-internal.component';
import { AccountDetailsExternalComponent } from './sections/accounts/account-details/account-details-external/account-details-external.component';
import { AccountsFiltersComponent } from './sections/activity/accounts-filters/accounts-filters.component';
import { LocationsComponent } from './sections/locations/locations.component';
import { LocationsEditComponent } from './sections/locations/locations-edit/locations-edit.component';
import { LocationsDetailsComponent } from './sections/locations/locations-details/locations-details.component';
import { LocationsItemComponent } from './sections/locations/locations-item/locations-item.component';
import { AccountDetailsExternalItemComponent } from './sections/accounts/account-details/account-details-external-item/account-details-external-item.component';
import { AccountEditExternalComponent } from './sections/accounts/account-edit/account-edit-external/account-edit-external.component';
import { AddAccountsComponent } from './sections/accounts/account-edit/add-accounts/add-accounts.component';
import { ActivityEvidenceComponent } from './sections/activity/activity-evidence/activity-evidence.component';
import { ActivityTransactionsComponent } from './sections/activity/activity-transactions/activity-transactions.component';
import { ActivityStatisticsComponent } from './sections/activity/activity-statistics/activity-statistics.component';
import { ActivityStatisticsFiltersComponent } from './sections/activity/activity-statistics/activity-statistics-filters/activity-statistics-filters.component';
import { ActivityStatisticsGraphComponent } from './sections/activity/activity-statistics/activity-statistics-graph/activity-statistics-graph.component';
import { ActivityStatisticsOptionsComponent } from './sections/activity/activity-statistics/activity-statistics-options/activity-statistics-options.component';
import { AuditComponent } from './sections/audit/audit.component';
import { AccountDetailsCommentComponent } from './sections/accounts/account-details/account-details-comment/account-details-comment.component';
import { AccountLookupComponent } from './sections/accounts/account-edit/account-lookup/account-lookup.component';
import { EnhancedDueDiligenceComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence.component';
import { SarComponent } from './sections/sar/sar.component';
import { SarDetailsComponent } from './sections/sar/sar-details/sar-details.component';
import { SarItemComponent } from './sections/sar/sar-item/sar-item.component';
import { SarWizardComponent } from './sections/sar/sar-wizard/sar-wizard.component';
import { SarSubjectsComponent } from './sections/sar/sections/sar-subjects/sar-subjects.component';
import { SarSubjectItemComponent } from './sections/sar/sections/sar-subjects/sar-subject-item/sar-subject-item.component';
import { SarSubjectLookupComponent } from './sections/sar/sections/sar-subjects/sar-subject-lookup/sar-subject-lookup.component';
import { SarSuspiciousActivityComponent } from './sections/sar/sections/sar-suspicious-activity/sar-suspicious-activity.component';

import { SarFinancialInstitutionsComponent } from './sections/sar/sections/sar-financial-institutions/sar-financial-institutions.component';
import { SarFinancialInstitutionEditComponent } from './sections/sar/sections/sar-financial-institutions/sar-financial-institution-edit/sar-financial-institution-edit.component';
import { SarFinancialInstitutionItemComponent } from './sections/sar/sections/sar-financial-institutions/sar-financial-institution-item/sar-financial-institution-item.component';
import { SarBranchItemComponent } from './sections/sar/sections/sar-financial-institutions/sar-branch-item/sar-branch-item.component';
import { SarBranchEditComponent } from './sections/sar/sections/sar-financial-institutions/sar-branch-edit/sar-branch-edit.component';
import { SarCyberEventEditComponent } from './sections/sar/sections/sar-suspicious-activity/sar-cyber-event-edit/sar-cyber-event-edit.component';
import { SarCyberEventItemComponent } from './sections/sar/sections/sar-suspicious-activity/sar-cyber-event-item/sar-cyber-event-item.component';
import { SarCyberEventsComponent } from './sections/sar/sections/sar-suspicious-activity/sar-cyber-events/sar-cyber-events.component';
import { SarIpAddressFormComponent } from './sections/sar/sections/sar-suspicious-activity/sar-ip-address-form/sar-ip-address-form.component';
import { SarIpAddressItemComponent } from './sections/sar/sections/sar-suspicious-activity/sar-ip-address-item/sar-ip-address-item.component';
import { SarIpAddressesComponent } from './sections/sar/sections/sar-suspicious-activity/sar-ip-addresses/sar-ip-addresses.component';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { SarWizardNavigationComponent } from './sections/sar/sar-wizard/sar-wizard-navigation/sar-wizard-navigation.component';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { ScrollSpyService } from 'ngx-scrollspy';
import { SarFilingInstitutionComponent } from './sections/sar/sections/sar-filing-institution/sar-filing-institution.component';
import { SarGeneralComponent } from './sections/sar/sections/sar-general/sar-general.component';
import { ActivityStackedBarChartComponent } from './sections/activity/activity-statistics/charts/activity-stacked-bar-chart/activity-stacked-bar-chart.component';
import { ActivityLineChartComponent } from './sections/activity/activity-statistics/charts/activity-line-chart/activity-line-chart.component';
import { LocationLookupComponent } from './sections/locations/location-lookup/location-lookup.component';
import { SarWorkflowDrawerComponent } from './sections/sar/sar-workflow-drawer/sar-workflow-drawer.component';
import { ResolutionComponent } from './sections/resolution/resolution.component';
import { QuestionnaireComponent } from './sections/enhanced-due-diligence/questionaire/questionnaire.component';
import { PreviousAnswerItemComponent } from './sections/enhanced-due-diligence/questionaire/previous-answer-item/previous-answer-item.component';
import { QuestionnaireQuestionComponent } from './sections/enhanced-due-diligence/questionaire/questionnaire-question/questionnaire-question.component';

const config = {
  breakPoints: {
    xs: { max: 600 },
    sm: { min: 601, max: 959 },
    md: { min: 960, max: 1279 },
    lg: { min: 1280, max: 1919 },
    xl: { min: 1920 },
  },
  debounceTime: 100,
};

@NgModule({
  declarations: [
    OverviewComponent,
    CaseManagementListComponent,
    ContactsComponent,
    ContactItemComponent,
    ContactEditComponent,
    ContactDetailsComponent,
    NotesComponent,
    NotesItemComponent,
    NotesEditComponent,
    NoteDetailsComponent,
    TasksComponent,
    TaskEditComponent,
    TaskDetailsComponent,
    TaskItemComponent,
    AttachmentsComponent,
    AttachmentEditComponent,
    AttachmentDetailsComponent,
    AttachmentItemComponent,
    OverviewDetailsComponent,
    SubjectsComponent,
    SubjectEditComponent,
    SubjectItemComponent,
    SubjectDetailsComponent,
    SubjectAddressEditComponent,
    SubjectAddressItemComponent,
    TaskGroupComponent,
    SubjectIdentificationEditComponent,
    ManageIdentificationsComponent,
    SubjectIdentificationItemComponent,
    ManageAddressesComponent,
    ManageAlternateNamesComponent,
    ManageEmailsComponent,
    ManageWebsitesComponent,
    ManagePhoneNumbersComponent,
    SubjectPhoneEditComponent,
    SubjectPhoneItemComponent,
    TransactionsComponent,
    AttachmentGroupItemComponent,
    AttachmentFileItemComponent,
    SubjectAlternateNameEditComponent,
    SubjectAlternateNameItemComponent,
    CaseManagementListFiltersComponent,
    SubjectLookupComponent,
    AccountsComponent,
    AccountItemComponent,
    AccountDetailsComponent,
    TaskCommentItemComponent,
    TaskCommentFormComponent,
    TaskAssignmentFormComponent,
    ContactTypeLawEnforcementComponent,
    ContactTypeInternalComponent,
    ContactTypeExternalComponent,
    ContactTypeVictimComponent,
    CreateCaseDrawerComponent,
    SubjectEntityFormComponent,
    SubjectIndividualFormComponent,
    ActivityComponent,
    AccountEditComponent,
    AccountDetailsInternalComponent,
    AccountDetailsExternalComponent,
    AccountsFiltersComponent,
    LocationsComponent,
    LocationsEditComponent,
    LocationsDetailsComponent,
    LocationsItemComponent,
    AccountDetailsExternalItemComponent,
    AccountEditExternalComponent,
    AddAccountsComponent,
    ActivityEvidenceComponent,
    ActivityTransactionsComponent,
    ActivityStatisticsComponent,
    ActivityStatisticsFiltersComponent,
    ActivityStatisticsGraphComponent,
    ActivityStatisticsOptionsComponent,
    AuditComponent,
    AccountDetailsCommentComponent,
    AccountLookupComponent,
    EnhancedDueDiligenceComponent,
    SarComponent,
    SarDetailsComponent,
    SarItemComponent,
    SarWizardComponent,
    SarSubjectsComponent,
    SarSubjectItemComponent,
    SarSubjectLookupComponent,
    SarSuspiciousActivityComponent,
    SarIpAddressesComponent,
    SarIpAddressFormComponent,
    SarIpAddressItemComponent,
    SarCyberEventsComponent,
    SarCyberEventEditComponent,
    SarCyberEventItemComponent,
    SarFinancialInstitutionsComponent,
    SarFinancialInstitutionEditComponent,
    SarFinancialInstitutionItemComponent,
    SarBranchItemComponent,
    SarBranchEditComponent,
    SarWizardNavigationComponent,
    SarFilingInstitutionComponent,
    SarGeneralComponent,
    ActivityStackedBarChartComponent,
    ActivityLineChartComponent,
    LocationLookupComponent,
    SarWorkflowDrawerComponent,
    ResolutionComponent,
    QuestionnaireComponent,
    PreviousAnswerItemComponent,
    QuestionnaireQuestionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CaseManagementRoutingModule,
    ResponsiveModule.forRoot(config),
    AngularStickyThingsModule,
    ScrollSpyModule.forRoot(),
  ],
  exports: [CreateCaseDrawerComponent],
  providers: [ScrollSpyService],
})
export class CaseManagementModule {}
