import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@fcs/app/shell/shell.service';
import { CaseManagementListComponent } from './case-management-list/case-management-list.component';
import { AccountsComponent } from './sections/accounts/accounts.component';
import { ActivityComponent } from './sections/activity/activity.component';
import { AttachmentsComponent } from './sections/attachments/attachments.component';
import { AuditComponent } from './sections/audit/audit.component';
import { OverviewComponent } from './sections/case-management-overview/overview.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { LocationsComponent } from './sections/locations/locations.component';
import { NotesComponent } from './sections/notes/notes.component';
import { SubjectsComponent } from './sections/subjects/subjects.component';
import { TasksComponent } from './sections/tasks/tasks.component';
import { TransactionsComponent } from './sections/transactions/transactions.component';
import { EnhancedDueDiligenceComponent } from './sections/enhanced-due-diligence/enhanced-due-diligence.component';
import { SarComponent } from './sections/sar/sar.component';
import { ResolutionComponent } from './sections/resolution/resolution.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'case-management',
      children: [
        {
          path: '',
          component: CaseManagementListComponent,
          data: { title: marker('Case Management') },
        },
        {
          path: ':id',
          children: [
            {
              path: 'overview',
              component: OverviewComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'contacts',
              component: ContactsComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'transactions',
              component: TransactionsComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'notes',
              component: NotesComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'tasks',
              component: TasksComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'attachments',
              component: AttachmentsComponent,
              data: { title: marker('Case Management') },
            },

            {
              path: 'subjects',
              component: SubjectsComponent,
              data: { title: marker('Case Management') },
            },

            {
              path: 'accounts',
              component: AccountsComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'locations',
              component: LocationsComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'activity',
              component: ActivityComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'audit',
              component: AuditComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'edd',
              component: EnhancedDueDiligenceComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'sar',
              component: SarComponent,
              data: { title: marker('Case Management') },
            },
            {
              path: 'resolution',
              component: ResolutionComponent,
              data: { title: marker('Case Management') },
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
export class CaseManagementRoutingModule {}
