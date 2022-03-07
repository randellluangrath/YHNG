import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-light-svg-icons';
import { MenuItem } from 'primeng/api';
import { IEddCaseHistory } from '../enhanced-due-diligence.component';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faBan,
  faCalendar,
  faInfoCircle,
  faTasks,
} from '@fortawesome/pro-light-svg-icons';

import {
  faComment,
  faUser,
  faHandPaper,
} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'yh-enhanced-due-diligence-item',
  templateUrl: './enhanced-due-diligence-item.component.html',
  styleUrls: ['./enhanced-due-diligence-item.component.scss'],
})
export class EnhancedDueDiligenceItemComponent implements OnInit {
  @Input()
  record: IEddCaseHistory;

  @Output()
  onSelected: EventEmitter<IEddCaseHistory> = new EventEmitter<IEddCaseHistory>();

  dateIcon: IconDefinition = faCalendar;
  assigneeIcon: IconDefinition = faUser;
  informationIcon: IconDefinition = faInfoCircle;
  circleIcon: IconDefinition = faCircle;
  userIcon: IconDefinition = faUser;
  commentIcon: IconDefinition = faComment;

  completedIcon: IconDefinition = faCheck;
  onHoldIcon: IconDefinition = faHandPaper;
  cancelledIcon: IconDefinition = faBan;
  progressIcon: IconDefinition = faTasks;

  statusOptions: MenuItem[] = [
    {
      label: 'Completed',
      icon: 'fal fa-check',
      command: () => {},
    },
    { separator: true },
    {
      label: 'Cancelled',
      icon: 'fal fa-ban',
      command: () => {},
    },
  ];

  showNotes: boolean;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  getIcon(state: TaskState): IconDefinition {
    return this.completedIcon;
  }

  getTaskDescription(): string {
    return 'Open';
  }

  showForm(event: MouseEvent): void {}

  handleTaskSelected(): void {}

  toggleNotes(): void {
    this.showNotes = !this.showNotes;
  }
}
