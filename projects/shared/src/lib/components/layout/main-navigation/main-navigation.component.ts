import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MainNavigationFooterComponent } from './main-navigation-footer/main-navigation-footer.component';
import { MainNavigationHeaderComponent } from './main-navigation-header/main-navigation-header.component';
import { INavigationGroup, INavigationItem } from './models';

@Component({
  selector: 'yh-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
  host: {
    '[class.is-expanded]': 'isExpanded',
    '[class.is-collapsed]': '!isExpanded',
  },
})
export class MainNavigationComponent implements OnInit {
  @ContentChild(MainNavigationHeaderComponent)
  headerComponent: MainNavigationComponent;

  @ContentChild(MainNavigationFooterComponent)
  footerComponent: MainNavigationFooterComponent;

  @Input()
  title: string;

  @Input()
  groupedItems: INavigationGroup[] = [];

  @Output()
  expanded: EventEmitter<boolean> = new EventEmitter<boolean>();

  isExpanded: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  handleExpand(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
    this.expanded.emit(this.isExpanded);
  }
}
