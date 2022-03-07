import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@fcs/app/shell/shell.service';
import { RiskEngineEditComponent } from './risk-engine-edit/risk-engine-edit.component';
import { RiskEngineListComponent } from './risk-engine-list/risk-engine-list.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'risk-engine',
      children: [
        {
          path: '',
          component: RiskEngineListComponent,
          data: { title: marker('Risk Analysis') },
        },
        {
          path: ':id',
          component: RiskEngineEditComponent,
          data: { title: marker('Risk Analysis') },
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
export class RiskEngineRoutingModule {}
