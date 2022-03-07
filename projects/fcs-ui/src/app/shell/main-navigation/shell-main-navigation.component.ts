import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { Observable, of, Subject } from 'rxjs';
import { map, startWith, throttleTime } from 'rxjs/operators';
import { MainNavigationService } from './main-navigation.service';

export enum NavigationTarget {
  Default,
  CaseManagement,
  ClientManagement,
  ScenarioEngine,
}
@UntilDestroy()
@Component({
  selector: 'yh-shell-main-navigation',
  templateUrl: './shell-main-navigation.component.html',
  styleUrls: ['./shell-main-navigation.component.scss'],
})
export class ShellMainNavigationComponent implements OnInit, OnDestroy {
  @HostListener('mouseenter') onMouseEnter() {
    this.hasMouseEntered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hasMouseEntered = false;
  }

  @Input()
  forceCollapse: boolean;

  @Output()
  onExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();

  hasMouseEntered: boolean = false;

  NavigationTarget = NavigationTarget;

  targetNavigation: NavigationTarget = NavigationTarget.Default;

  constructor(private navigationService: MainNavigationService) {}

  ngOnInit(): void {
    this.navigationService
      .events()
      .pipe(untilDestroyed(this))
      .subscribe((target: NavigationTarget) => {
        this.targetNavigation = target;
      });
  }

  ngOnDestroy(): void {}

  expansionChanged(isExpanded: boolean): void {
    this.onExpanded.emit(isExpanded);
  }
}
