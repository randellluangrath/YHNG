import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  RouterEvent,
  NavigationStart,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@fcs/env';
import { Logger, UntilDestroy, untilDestroyed } from '@fcs/core';
import { I18nService } from '@fcs/app/i18n';
import { MainNavigationService } from './shell/main-navigation/main-navigation.service';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private i18nService: I18nService,
    private navigationService: MainNavigationService
  ) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(
      environment.defaultLanguage,
      environment.supportedLanguages
    );

    const onNavigationEnd = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        const navigationEvent: NavigationStart = event as NavigationStart;
        if (navigationEvent.url.indexOf('case-management/') > -1) {
          this.navigationService.showCaseManagementNavigation();
        } else if (navigationEvent.url.indexOf('client-management/') > -1) {
          this.navigationService.showClientManagementNavigation();
        } else if (navigationEvent.url.indexOf('scenario-engine') > -1) {
          this.navigationService.showScenarioEngineNavigation();
        } else {
          this.navigationService.showDefaultNavigation();
        }
      }
    });

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
