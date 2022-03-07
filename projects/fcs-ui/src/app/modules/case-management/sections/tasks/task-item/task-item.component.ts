import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ITask, TaskState } from '@fcs/app/domain/models/task';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
import { MenuItem } from 'primeng/api';
import { OverlayPanelComponent } from 'projects/shared/src/lib/components/layout/overlay-panel/overlay-panel.component';

@Component({
  selector: 'yh-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  host: {
    '[class.is-selected]': 'task.isSelected',
  },
})
export class TaskItemComponent implements OnInit, AfterViewInit {
  @ViewChild(OverlayPanelComponent)
  overlayPanel: OverlayPanelComponent;

  @Input()
  task: ITask;

  @Output()
  onSelected: EventEmitter<ITask> = new EventEmitter<ITask>();

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

  TaskState = TaskState;

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
    switch (state) {
      case TaskState.Completed:
        return this.completedIcon;

      case TaskState.Started:
        return this.progressIcon;
      default:
        return this.circleIcon;
    }
  }

  getTaskDescription(): string {
    switch (this.task.state) {
      case TaskState.Completed: {
        return 'Completed';
      }
      case TaskState.Started: {
        return 'Open';
      }
    }
    return 'New';
  }

  showForm(event: MouseEvent): void {
    this.overlayPanel.toggle(event, event.currentTarget);
  }

  handleTaskSelected(): void {
    this.onSelected.emit(this.task);
  }

  toggleNotes(): void {
    this.showNotes = !this.showNotes;
  }
}
