import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faLongArrowAltLeft,
  faBriefcase,
  faIdCard,
  faUserSecret,
  faBarcode,
  faCodeBranch,
  faUser,
  faMapMarked,
  faBell,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import {
  faComment,
  faHistory,
  faSearchLocation,
  faShieldAlt,
  faTags,
} from '@fortawesome/pro-light-svg-icons';
import { INavigationGroup } from 'projects/shared/src/lib/components/layout/main-navigation/models';
@Component({
  selector: 'yh-scenario-engine-navigation',
  templateUrl: './scenario-engine-navigation.component.html',
  styleUrls: ['./scenario-engine-navigation.component.scss'],
})
export class ScenarioEngineNavigationComponent implements OnInit {
  @Input()
  expanded: boolean = true;

  @Output()
  onExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();

  exitArrow: IconDefinition = faLongArrowAltLeft;
  breifcaseIcon: IconDefinition = faBriefcase;

  isExpanded: boolean = true;

  groups: INavigationGroup[] = [
    {
      name: 'Fraud',
      items: [
        {
          location: '/scenario-engine/fraud/daily',
          title: 'Daily',
          icon: faIdCard,
        },
        {
          location: '/scenario-engine/fraud/real-time-ach',
          title: 'Real Time ACH',
          icon: faIdCard,
        },
        {
          location: '/scenario-engine/fraud/real-time-wire',
          title: 'Real Time Wire',
          icon: faIdCard,
        },
        {
          location: '/scenario-engine/fraud/card',
          title: 'Card',
          icon: faIdCard,
        },
        {
          location: '/scenario-engine/fraud/faster-payments',
          title: 'Faster Payments',
          icon: faIdCard,
        },
      ],
    },
    {
      name: 'BSA/AML',
      items: [
        {
          location: '/scenario-engine/scenarios',
          title: 'Scenarios',
          icon: faIdCard,
        },
        {
          location: '/scenario-engine/peer-analysis',
          title: 'Peer Analysis',
          icon: faIdCard,
        },
        {
          location: '/scenario-engine/individual-analysis',
          title: 'Individual Analysis',
          icon: faIdCard,
        },
      ],
    },
    {
      name: 'Settings',
      items: [
        {
          location: '/scenario-engine/settings/tags',
          title: 'Tags',
          icon: faTags,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  returnToList(): void {}

  handleExpanded(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
    this.onExpanded.emit(this.isExpanded);
  }
}
