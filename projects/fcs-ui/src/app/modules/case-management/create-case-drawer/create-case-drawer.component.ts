import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISubject } from '@fcs/app/domain/models/subject';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/pro-light-svg-icons';
import * as faker from 'faker';
import { MenuItem } from 'primeng/api';
import { FieldOption } from 'projects/shared/src/lib/models/models';

@Component({
  selector: 'yh-create-case-drawer',
  templateUrl: './create-case-drawer.component.html',
  styleUrls: ['./create-case-drawer.component.scss'],
})
export class CreateCaseDrawerComponent implements OnInit {
  @Input()
  visible: boolean;

  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();

  fgCase: FormGroup;
  fcName: FormControl = new FormControl();
  fcHighPriority: FormControl = new FormControl();
  fcStatus: FormControl = new FormControl();
  fcType: FormControl = new FormControl();
  fcSubType: FormControl = new FormControl();
  fcDescription: FormControl = new FormControl();

  fcDue: FormControl = new FormControl();
  fcAssignee: FormControl = new FormControl();
  fcSubject: FormControl = new FormControl();
  fcAccounts: FormControl = new FormControl();
  fcVictims: FormControl = new FormControl();

  accountIcon: IconDefinition = faUniversity;
  subjectIcon: IconDefinition = faUserSecret;

  saveOptions: MenuItem[] = [
    {
      label: 'Create',
    },
    {
      label: 'Create & Investigate Later',
    },
  ];

  subjects: ISubject[] = Array.from(new Array(3), (v, k) => {
    return this.mock.createSubject(k);
  });

  accounts: string[] = Array.from(new Array(20), () => {
    return `${faker.random.number(10)}:D - ${faker.company.companyName()}`;
  });

  accountOptions: FieldOption<string>[] = this.accounts.map(
    (a) => new FieldOption(a, a)
  );

  subjectTypes: FieldOption<string>[] = [
    new FieldOption('Subject', 'Subject'),
    new FieldOption('Victim', 'Victim'),
  ];

  constructor(private fb: FormBuilder, private mock: MockDataService) {}

  ngOnInit(): void {
    this.fgCase = this.fb.group({
      fcName: this.fcName,
      fcHighPriority: this.fcHighPriority,
      fcStatus: this.fcStatus,
      fcType: this.fcType,
      fcSubType: this.fcSubType,
      fcDescription: this.fcDescription,
      fcDue: this.fcDue,
      fcAssignee: this.fcAssignee,
      fcSubject: this.fcSubject,
      fcAccounts: this.fcAccounts,
      fcVictims: this.fcVictims,
    });
  }

  handleOnHide(): void {
    this.close.emit();
  }
}
