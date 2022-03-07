import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'yh-subject-entity-form',
  templateUrl: './subject-entity-form.component.html',
  styleUrls: ['./subject-entity-form.component.scss'],
})
export class SubjectEntityFormComponent implements OnInit {
  fgIdentity: FormGroup;
  fcName: FormControl = new FormControl();
  fcTin: FormControl = new FormControl();
  fcTinType: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgIdentity = this.fb.group({
      fcName: this.fcName,
      fcTin: this.fcTin,
      fcTinType: this.fcTinType,
    });
  }
}
