import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '../../shell/shell.service';
import { ClientAccountSetsEditComponent } from './client-account-sets-edit/client-account-sets-edit.component';
import { ClientAccountSetsListComponent } from './client-account-sets-list/client-account-sets-list.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'sets',
      children: [
        {
          path: '',
          component: ClientAccountSetsListComponent,
          data: { title: marker('Client & Account Sets') },
        },
        {
          path: ':id',
          component: ClientAccountSetsEditComponent,
          data: { title: marker('Client & Account Sets') },
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
export class ClientAccountSetsRoutingModule {}
