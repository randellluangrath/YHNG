import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as faker from 'faker';

@Component({
  selector: 'yh-client-account-matches',
  templateUrl: './client-account-matches.component.html',
  styleUrls: ['./client-account-matches.component.scss'],
})
export class ClientAccountMatchesComponent implements OnInit {
  matches: string[] = Array.from(new Array(30), () => {
    return faker.name.firstName() + ' ' + faker.name.lastName();
  });

  fgFilter: FormGroup;
  fcFilterTerm: FormControl = new FormControl();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgFilter = this.fb.group({
      fcFilterTerm: this.fcFilterTerm,
    });
  }
}
