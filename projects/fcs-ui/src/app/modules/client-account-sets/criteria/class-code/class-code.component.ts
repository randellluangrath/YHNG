import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-class-code',
  templateUrl: './class-code.component.html',
  styleUrls: ['./class-code.component.scss'],
})
export class ClassCodeComponent implements OnInit {
  fgCodes: FormGroup;
  faCodes: FormArray;

  options: FieldOption<string>[] = [
    new FieldOption('B', 'Corp Business'),
    new FieldOption('C', 'Commercial Bank'),
    new FieldOption('D', 'DBA (Sole Prop)'),
    new FieldOption('E', 'Fiduciary/Estat'),
    new FieldOption('F', 'Foreign Bank'),
    new FieldOption('G', 'Foreign Govt'),
    new FieldOption('I', 'Individual'),
    new FieldOption('L', 'Ltd Liab Corp'),
    new FieldOption('N', 'Not for Profit'),
    new FieldOption('O', 'Other Dep Inst'),
    new FieldOption('P', 'Partnership'),
    new FieldOption('T', 'Trust'),
    new FieldOption('U', 'U S Govt'),
    new FieldOption('X', 'Cert/Official'),
    new FieldOption('Z', 'Public funds'),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faCodes = this.fb.array([]);

    // Short hand so I don't have the type the labels a bunch
    this.options.forEach((o) => (o.label = `${o.label} - ${o.value}`));

    this.options.forEach((o) => this.faCodes.push(new FormControl(false)));

    this.fgCodes = this.fb.group({
      faCodes: this.faCodes,
    });
  }
}
