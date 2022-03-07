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
  faSitemap,
} from '@fortawesome/pro-light-svg-icons';
import { INavigationGroup } from 'projects/shared/src/lib/components/layout/main-navigation/models';

@Component({
  selector: 'yh-client-management-navigation',
  templateUrl: './client-management-navigation.component.html',
  styleUrls: ['./client-management-navigation.component.scss'],
})
export class ClientManagementNavigationComponent implements OnInit {
  @Input()
  expanded: boolean = true;

  @Output()
  onExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();

  exitArrow: IconDefinition = faLongArrowAltLeft;
  breifcaseIcon: IconDefinition = faBriefcase;

  isExpanded: boolean = true;

  groups: INavigationGroup[] = [
    {
      name: '',
      items: [
        {
          location: '/client-management/1/overview',
          title: 'Overview',
          icon: faIdCard,
        },
        {
          location: '/client-management/1/relationships',
          title: 'Relationships',
          icon: faSitemap,
        },
        {
          location: '/client-management/1/transactions',
          title: 'Transactions',
          icon: faBarcode,
        },
        {
          location: '/client-management/1/link-analysis',
          title: 'Link Analysis',
          icon: faCodeBranch,
        },
        {
          location: '/client-management/1/beneficial-owner',
          title: 'Beneficial Owner',
          icon: faUser,
        },
        {
          location: '/client-management/1/map-view',
          title: 'Map View',
          icon: faMapMarked,
        },
        {
          location: '/client-management/1/history',
          title: 'History',
          icon: faHistory,
        },
        // {
        //   location: '/client-management/1/case-history',
        //   title: 'Case History',
        //   icon: faBriefcase,
        // },
        // {
        //   location: '/client-management/1/alert-history',
        //   title: 'Alert History',
        //   icon: faBell,
        // },
        // {
        //   location: '/client-management/1/risk-history',
        //   title: 'Risk History',
        //   icon: faUserSecret,
        // },
        // {
        //   location: '/client-management/1/sar-history',
        //   title: 'SAR History',
        //   icon: faShieldAlt,
        // },
        {
          location: '/client-management/1/documents',
          title: 'Documents',
          icon: faCopy,
        },
        {
          location: '/client-management/1/due-diligence',
          title: 'CDD / ADD',
          icon: faSearchLocation,
        },
        {
          location: '/client-management/1/enhanced-due-diligence',
          title: 'Enhanced Due Diligence',
          icon: faSearchLocation,
        },
        {
          location: '/client-management/1/comments',
          title: 'Comments',
          icon: faComment,
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
