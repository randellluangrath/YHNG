import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@fcs/app/shell/shell.service';
import { ScenarioEditComponent } from './scenario-edit/scenario-edit.component';
import { ScenarioListComponent } from './scenario-list/scenario-list.component';
import { ScenarioTagsComponent } from './settings/scenario-tags/scenario-tags.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'scenario-engine',
      children: [
        {
          path: '',
          component: ScenarioListComponent,
          data: { title: marker('Scenario Engine') },
        },
        {
          path: ':id',
          component: ScenarioEditComponent,
          data: { title: marker('Scenario Engine') },
        },
        {
          path: 'settings',
          children: [
            {
              path: 'tags',
              component: ScenarioTagsComponent,
              data: { title: marker('Scenario Engine') },
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
export class ScenarioBuilderRoutingModule {}
