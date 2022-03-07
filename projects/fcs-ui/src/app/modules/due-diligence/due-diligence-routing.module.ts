import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@fcs/app/shell/shell.service';
import { DueDiligenceManagementComponent } from './due-diligence-management/due-diligence-management.component';
import { EddSchedulingManagementComponent } from './edd-scheduling-management/edd-scheduling-management.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'due-diligence',
      data: { title: marker('Due Diligence') },
      children: [
        {
          path: '',
          component: DueDiligenceManagementComponent,
          data: { title: marker('Due Diligence') },
        },
        {
          path: 'edd-schedule-management',
          component: EddSchedulingManagementComponent,
          data: { title: marker('Due Diligence') },
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
export class DueDiligenceRoutingModule {}
