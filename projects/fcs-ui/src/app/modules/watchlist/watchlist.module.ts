import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistListComponent } from './watchlist-list/watchlist-list.component';
import { WatchlistRoutingModule } from './watchlist-routing.module';
import { SharedModule } from '@fcs/app/@shared';
import { WatchlistDetailsComponent } from './watchlist-details/watchlist-details.component';

@NgModule({
  declarations: [WatchlistListComponent, WatchlistDetailsComponent],
  imports: [CommonModule, WatchlistRoutingModule, SharedModule],
})
export class WatchlistModule {}
