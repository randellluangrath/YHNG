import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'yh-sar-details',
  templateUrl: './sar-details.component.html',
  styleUrls: ['./sar-details.component.scss'],
})
export class SarDetailsComponent implements OnInit {
  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  events: any[] = [
    {
      status: 'Step 1',
      completedBy: 'John W.',
      date: '10/10/2020 10:30:00Z',
      color: '#2196f3',
    },
    {
      status: 'Step 2',
      completedBy: 'John W.',
      date: '10/10/2020 10:30:00Z',
      color: '#6554a5',
    },
    {
      status: 'Step 3',
      completedBy: 'John W.',
      date: '10/10/2020 10:30:00Z',
      color: '#90cc62',
    },
    {
      status: 'Step 4',
      completedBy: 'John W.',
      date: '10/10/2020 10:30:00Z',
      color: '#90cc62',
    },
    {
      status: 'Step 5',
      completedBy: 'John W.',
      date: '10/10/2020 10:30:00Z',
      color: '#2196f3',
    },
  ];

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target,
      acceptLabel: 'Remove SAR',
      rejectLabel: 'Cancel',
      message: `Are you sure you want to remove this SAR from the case?`,
      icon: 'pi pi-exclamation-triangle popconfirm-icon',
      accept: () => {
        //confirm action
      },
      reject: () => {
        //reject action
      },
    });
  }
}
