import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NavigationTarget } from './shell-main-navigation.component';

@Injectable({
  providedIn: 'root',
})
export class MainNavigationService {
  private navigation$: ReplaySubject<NavigationTarget> =
    new ReplaySubject<NavigationTarget>(NavigationTarget.Default);
  private navigationChanges$: Observable<NavigationTarget> =
    this.navigation$.asObservable();

  private expanded$: Subject<boolean> = new Subject<boolean>();

  private expandedChanges$: Observable<boolean> = this.expanded$.asObservable();

  events(): Observable<NavigationTarget> {
    return this.navigationChanges$;
  }

  expandedEvents(): Observable<boolean> {
    return this.expandedChanges$;
  }

  setMenuExpanded(expanded: boolean): void {
    this.expanded$.next(expanded);
  }

  showDefaultNavigation(): void {
    this.navigation$.next(NavigationTarget.Default);
  }

  showCaseManagementNavigation(): void {
    this.navigation$.next(NavigationTarget.CaseManagement);
  }

  showClientManagementNavigation(): void {
    this.navigation$.next(NavigationTarget.ClientManagement);
  }
  showScenarioEngineNavigation(): void {
    this.navigation$.next(NavigationTarget.ScenarioEngine);
  }
}
