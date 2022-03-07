import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'yh-contact-type-law-enforcement',
  templateUrl: './contact-type-law-enforcement.component.html',
  styleUrls: ['./contact-type-law-enforcement.component.scss'],
})
export class ContactTypeLawEnforcementComponent implements OnInit {
  fgIdentity: FormGroup;

  fcAgency: FormControl = new FormControl();
  fcName: FormControl = new FormControl();
  fcDate: FormControl = new FormControl();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgIdentity = this.fb.group({
      fcAgency: this.fcAgency,
      fcName: this.fcName,
      fcDate: this.fcDate,
    });
  }
}
