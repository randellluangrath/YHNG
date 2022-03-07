import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '../../shell/shell.service';
import { ColorGuideComponent } from './color-guide/color-guide.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: marker('Financial Crimes Defender') },
    },
    {
      path: 'dashboard/color-guide',
      component: ColorGuideComponent,
      data: { title: marker('Financial Crimes Defender') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DashboardRoutingModule {}
