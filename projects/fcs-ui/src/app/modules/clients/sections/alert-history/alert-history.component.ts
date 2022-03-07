import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Alert, AlertStatus, AlertType } from '@fcs/app/domain/models/alerts';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { faCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'yh-alert-history',
  templateUrl: './alert-history.component.html',
  styleUrls: ['./alert-history.component.scss'],
})
export class AlertHistoryComponent implements OnInit {
  showFilters: boolean;

  alerts: Alert[] = Array.from(new Array(100), (v, k) => {
    var alert = this.mock.createAlert();
    alert.title = 'Guy Edwards';
    return alert;
  });

  selectedAlert: Alert;

  AlertType = AlertType;
  AlertStatus = AlertStatus;

  circleIcon: IconDefinition = faCircle;

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

  fgFilter: FormGroup;
  fcTerm: FormControl = new FormControl();

  constructor(private fb: FormBuilder, private mock: MockDataService) {}

  ngOnInit(): void {
    this.fgFilter = this.fb.group({
      fcTerm: this.fcTerm,
    });
  }

  closeFilters(): void {
    this.showFilters = false;
  }

  handleRowSelected(e: any): void {}
  handleRowUnselected(e: any): void {}
}
