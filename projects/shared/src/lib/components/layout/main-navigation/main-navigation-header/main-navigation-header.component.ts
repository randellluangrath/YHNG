import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'yh-main-navigation-header',
  templateUrl: './main-navigation-header.component.html',
  styleUrls: ['./main-navigation-header.component.scss'],
})
export class MainNavigationHeaderComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  expanded: EventEmitter<boolean> = new EventEmitter<boolean>();

  isExpanded: boolean = true;
  menuExpandCollapseIcon: IconDefinition = faBars;

  constructor() {}

  ngOnInit(): void {}

  setExpanded(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
    this.expanded.emit(this.isExpanded);
  }
}
