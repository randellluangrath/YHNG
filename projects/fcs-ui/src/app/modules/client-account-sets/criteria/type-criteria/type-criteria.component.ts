import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-type-criteria',
  templateUrl: './type-criteria.component.html',
  styleUrls: ['./type-criteria.component.scss'],
})
export class TypeCriteriaComponent implements OnInit {
  fgCriteria: FormGroup;
  fcType: FormControl = new FormControl();

  options: FieldOption<string>[] = [
    new FieldOption('Individuals', 'Individuals'),
    new FieldOption('Organizations', 'Organizations'),
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgCriteria = this.fb.group({
      fcType: this.fcType,
    });
  }
}
