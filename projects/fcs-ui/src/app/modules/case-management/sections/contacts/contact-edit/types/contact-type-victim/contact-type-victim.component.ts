import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-contact-type-victim',
  templateUrl: './contact-type-victim.component.html',
  styleUrls: ['./contact-type-victim.component.scss'],
})
export class ContactTypeVictimComponent implements OnInit {
  fgName: FormGroup;
  fcType: FormControl = new FormControl(null);

  fcEntity: FormControl = new FormControl();
  fcFirstName: FormControl = new FormControl();
  fcMiddleInitials: FormControl = new FormControl();
  fcLastName: FormControl = new FormControl();
  fcSuffix: FormControl = new FormControl();

  typeOptions: FieldOption<string>[] = [
    new FieldOption('Individual', 'Individual'),
    new FieldOption('Entity', 'Entity'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgName = this.fb.group({
      fcEntity: this.fcEntity,
      fcFirstName: this.fcFirstName,
      fcMiddleInitials: this.fcMiddleInitials,
      fcLastName: this.fcLastName,
      fcSuffix: this.fcSuffix,
    });
  }
}
