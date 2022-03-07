import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@fcs/app/shell/shell.service';
import { AlertsListComponent } from './alerts-list/alerts-list.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'alerts',
      component: AlertsListComponent,
      data: { title: marker('Alerts') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AlertsRoutingModule {}
