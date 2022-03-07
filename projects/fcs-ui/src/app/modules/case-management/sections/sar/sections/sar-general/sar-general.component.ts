import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'yh-sar-general',
  templateUrl: './sar-general.component.html',
  styleUrls: ['./sar-general.component.scss'],
})
export class SarGeneralComponent implements OnInit {
  fgGeneral: FormGroup;
  fcName: FormControl = new FormControl();
  fcTypeOfBilling: FormControl = new FormControl();
  fcPriorReportIdentificationNumber: FormControl = new FormControl();
  fcNote: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgGeneral = this.fb.group({
      fcName: this.fcName,
      fcTypeOfBilling: this.fcTypeOfBilling,
      fcPriorReportIdentificationNumber: this.fcPriorReportIdentificationNumber,
      fcNote: this.fcNote,
    });
  }
}
