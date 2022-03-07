import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ICaseAuditRecord } from '@fcs/app/domain/models/case';
import { MockDataService } from '@fcs/app/services/mock-data.service';

@Component({
  selector: 'yh-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit {
  records: ICaseAuditRecord[] = [];

  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl('');
  fcUser: FormControl = new FormControl();
  fcFeature: FormControl = new FormControl();
  fcAction: FormControl = new FormControl();
  fcRange: FormControl = new FormControl();

  maxDate: Date = new Date();

  constructor(private fb: FormBuilder, private mocks: MockDataService) {}

  ngOnInit(): void {
    this.records = Array.from(new Array(100), (v, k) =>
      this.mocks.createCaseAuditRecord()
    );

    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
      fcUser: this.fcUser,
      fcFeature: this.fcFeature,
      fcAction: this.fcAction,
      fcRange: this.fcRange,
    });
  }
}
