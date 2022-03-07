import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'yh-contact-type-internal',
  templateUrl: './contact-type-internal.component.html',
  styleUrls: ['./contact-type-internal.component.scss'],
})
export class ContactTypeInternalComponent implements OnInit {
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
