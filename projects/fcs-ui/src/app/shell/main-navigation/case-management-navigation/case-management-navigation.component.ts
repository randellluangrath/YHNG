import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {
  faLongArrowAltLeft,
  faIdCard,
  faUserSecret,
  faAddressBook,
  faPaperclip,
  faBuilding,
  faHistory,
  faBarcode,
  faStickyNote,
  faTasks,
  faShieldAlt,
  faListAlt,
  faCommentAltCheck,
  faMapMarker,
  faUniversity,
  faMapMarkerAlt,
  faFolder,
} from '@fortawesome/pro-light-svg-icons';
import { INavigationGroup } from 'projects/shared/src/lib/components/layout/main-navigation/models';

@Component({
  selector: 'yh-case-management-navigation',
  templateUrl: './case-management-navigation.component.html',
  styleUrls: ['./case-management-navigation.component.scss'],
})
export class CaseManagementNavigationComponent implements OnInit {
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
          location: '/case-management/1/overview',
          title: 'Overview',
          icon: faIdCard,
        },
        {
          location: '/case-management/1/subjects',
          title: 'Subjects',
          icon: faUserSecret,
        },
        {
          location: '/case-management/1/accounts',
          title: 'Accounts',
          icon: faUniversity,
        },

        {
          location: '/case-management/1/locations',
          title: 'Locations',
          icon: faMapMarkerAlt,
        },
        {
          location: '/case-management/1/activity',
          title: 'Activity',
          icon: faHistory,
        },
        {
          location: '/case-management/1/contacts',
          title: 'Contacts',
          icon: faAddressBook,
        },

        {
          location: '/case-management/1/transactions',
          title: 'Transactions',
          icon: faBarcode,
        },
        {
          location: '/case-management/1/notes',
          title: 'Notes',
          icon: faStickyNote,
        },
        {
          location: '/case-management/1/tasks',
          title: 'Tasks',
          icon: faTasks,
        },
        {
          location: '/case-management/1/attachments',
          title: 'Attachments',
          icon: faPaperclip,
        },
        {
          location: '/case-management/1/audit',
          title: 'Audit',
          icon: faCommentAltCheck,
        },
        {
          location: '/case-management/1/edd',
          title: 'EDD',
          icon: faCommentAltCheck,
        },
        {
          location: '/case-management/1/sar',
          title: 'Resolve Case',
          icon: faShieldAlt,
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
