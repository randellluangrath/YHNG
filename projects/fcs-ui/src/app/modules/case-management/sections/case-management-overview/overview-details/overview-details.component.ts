import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'yh-overview-details',
  templateUrl: './overview-details.component.html',
  styleUrls: ['./overview-details.component.scss'],
})
export class OverviewDetailsComponent implements OnInit {
  events: any[];

  constructor() {}

  ngOnInit(): void {
    this.events = [
      {
        status: 'Added Attachment',
        value: 'Evidence.pdf',
        date: '10/10/2020 10:30:00Z',
        icon: PrimeIcons.PAPERCLIP,
        color: '#2196f3',
      },
      {
        status: 'Updated Case Type',
        value: 'Fraud',
        date: '10/10/2020 10:30:00Z',
        icon: PrimeIcons.BRIEFCASE,
        color: '#6554a5',
      },
      {
        status: 'Contact Added',
        value: 'John Smith',
        date: '10/10/2020 10:30:00Z',
        icon: PrimeIcons.USER,
        color: '#90cc62',
      },
      {
        status: 'Contact Updated',
        value: 'Melanie June',
        date: '10/10/2020 10:30:00Z',
        icon: PrimeIcons.USER,
        color: '#90cc62',
      },
      {
        status: 'Task Completed',
        value: 'Follow-Up',
        date: '10/10/2020 10:30:00Z',
        icon: PrimeIcons.CHECK,
        color: '#2196f3',
      },
    ];
  }
}
