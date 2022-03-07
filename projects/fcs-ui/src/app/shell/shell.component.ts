import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';

import { fromEvent, Observable } from 'rxjs';
import { of } from 'rxjs';
import { throttleTime, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  isExpanded: boolean = true;
  isScreenSmall$: Observable<boolean>;
  constructor() {}

  ngOnInit(): void {
    // Checks if screen size is less than 1024 pixels
    const checkScreenSize = () => document.body.offsetWidth < 768;

    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, 'resize').pipe(
      throttleTime(500),
      map(checkScreenSize)
    );

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()));
  }

  handleExpansion(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
  }
}
