import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith, throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private screenSize$: Observable<ScreenSize>;

  constructor() {
    // Checks if screen size is less than 1024 pixels
    const checkScreenSize = () => {
      const width = document.body.offsetWidth;
      if (width < 768) {
        return ScreenSize.Small;
      }
      return ScreenSize.Large;
    };

    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, 'resize').pipe(
      throttleTime(500),
      map(checkScreenSize)
    );

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    this.screenSize$ = screenSizeChanged$.pipe(startWith(checkScreenSize()));
  }

  screenSize(): Observable<ScreenSize> {
    return this.screenSize$;
  }
}

export enum ScreenSize {
  Large,
  Medium,
  Small,
  ExtraSmall,
}
