import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Alert } from '@fcs/app/domain/models/alerts';
import { IWatchlist, WatchList } from '@fcs/app/domain/models/watchlist';
import * as _ from 'lodash';

@Component({
  selector: 'yh-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.scss'],
})
export class WatchlistListComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl('');
  fcType: FormControl = new FormControl(null);
  fcAssignedTo: FormControl = new FormControl();

  items: WatchList[];

  selectedWatchlist: WatchList;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcType: this.fcType,
      fcAssignedTo: this.fcAssignedTo,
    });

    this.items = _.orderBy(
      Array.from(new Array(100), (val, index) => this.generateWatchlist(index)),
      (i) => i.riskScore,
      'desc'
    );
  }

  handleRowSelected(e: any): void {}

  handleRowUnselected(e: any): void {}

  handleDrawerCancel(): void {
    this.selectedWatchlist = null;
  }

  handleOnHide(): void {
    this.selectedWatchlist = null;
  }

  private generateWatchlist(id: number): WatchList {
    const watchlist = new WatchList();
    watchlist.id = id;
    watchlist.created = new Date().toUTCString();
    watchlist.riskScore = Math.floor(Math.random() * 100);
    watchlist.title = 'Guy Edwards';
    watchlist.match = 'CARO QUINTERO, Miguel Angel';
    watchlist.type = 'Individual';
    watchlist.list = '314(a)';
    watchlist.assignedTo = 'jwood';

    return watchlist;
  }
}
