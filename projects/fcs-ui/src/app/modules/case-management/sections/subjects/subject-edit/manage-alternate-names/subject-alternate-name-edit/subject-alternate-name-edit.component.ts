import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { untilDestroyed } from '@fcs/app/@core';
import { ISubjectAlternateName } from '@fcs/app/domain/models/subject';

@Component({
  selector: 'yh-subject-alternate-name-edit',
  templateUrl: './subject-alternate-name-edit.component.html',
  styleUrls: ['./subject-alternate-name-edit.component.scss'],
})
export class SubjectAlternateNameEditComponent implements OnInit {
  @Input()
  type: 'individual' | 'entity' = 'individual';

  @Input()
  identification: ISubjectAlternateName;

  @Output()
  onSave: EventEmitter<ISubjectAlternateName> = new EventEmitter<ISubjectAlternateName>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

  fgName: FormGroup;
  fcEntityName: FormControl = new FormControl();
  fcFirstName: FormControl = new FormControl();
  fcMiddleInitial: FormControl = new FormControl();
  fcLastName: FormControl = new FormControl();
  fcSuffix: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgName = this.fb.group({
      fcEntityName: this.fcEntityName,
      fcFirstName: this.fcFirstName,
      fcMiddleInitial: this.fcMiddleInitial,
      fcLastName: this.fcLastName,
      fcSuffix: this.fcSuffix,
    });
  }

  handleCancel(): void {
    this.fgName.reset();
    this.onCancel.emit();
  }

  handleSave(): void {
    if (this.fgName.valid) {
      this.onSave.emit({
        firstName: this.fcFirstName.value,
        middleInitial: this.fcMiddleInitial.value,
        lastName: this.fcLastName.value,
        suffix: this.fcSuffix.value,
        entity: this.fcEntityName.value,
      });
    }
  }
}
