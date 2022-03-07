import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yh-alert-details-analysis',
  templateUrl: './alert-details-analysis.component.html',
  styleUrls: ['./alert-details-analysis.component.scss'],
})
export class AlertDetailsAnalysisComponent implements OnInit {
  // I'm sure this will be a more detailed model in the future
  scenarios: string[] = [
    'Single Transaction Cash in Amount exceeded $5,000 within the first 10 day(s) of new client account opening',
    'Account 1234:D alerted because Wire Out Amount was $150,000 which was 100% of Cash In Amount of $150,000',
    'Customer 1 alerted because the aggregate Case In Amount for each day was between $3,000 and $10,000 totaling $11,000',
    'Account 1234:D alerted because Cash In Volume was 65 which was 87% of all Credit activity of 75',
    'Customer 1 alerted because Wire Out Amount was $150,000 which was 500% greater than their daily average of $30,000 for the previous 60 days.',
    'Client 166814 alerted because Wire in Amount was greater than $5000.00 over 30 day(s).',
    'Client 166814 alerted because Wire in Amount was greater than $5000.00 over 30 day(s).',
    'Client 166814 alerted because Wire in Amount was greater than $5000.00 over 30 day(s).',
    'Client 166814 alerted because Wire in Amount was greater than $5000.00 over 30 day(s).',
    'Client 166814 alerted because Wire in Amount was greater than $5000.00 over 30 day(s).',
  ];

  constructor() {}

  ngOnInit(): void {}
}
