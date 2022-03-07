import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'yh-contact-type-external',
  templateUrl: './contact-type-external.component.html',
  styleUrls: ['./contact-type-external.component.scss'],
})
export class ContactTypeExternalComponent implements OnInit {
  fgName: FormGroup;
  fcFirstName: FormControl = new FormControl();
  fcMiddleInitials: FormControl = new FormControl();
  fcLastName: FormControl = new FormControl();
  fcSuffix: FormControl = new FormControl();
  fcTitle: FormControl = new FormControl();
  fcAgency: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgName = this.fb.group({
      fcFirstName: this.fcFirstName,
      fcMiddleInitials: this.fcMiddleInitials,
      fcLastName: this.fcLastName,
      fcSuffix: this.fcSuffix,
      fcTitle: this.fcTitle,
      fcAgency: this.fcAgency,
    });
  }
}
