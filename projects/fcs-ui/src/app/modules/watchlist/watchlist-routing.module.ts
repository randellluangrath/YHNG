import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '../../shell/shell.service';
import { WatchlistListComponent } from './watchlist-list/watchlist-list.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'watchlist',
      component: WatchlistListComponent,
      data: { title: marker('Watch List') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class WatchlistRoutingModule {}
