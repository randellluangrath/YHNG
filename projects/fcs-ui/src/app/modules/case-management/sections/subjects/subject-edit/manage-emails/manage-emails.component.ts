import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ISubject } from '@fcs/app/domain/models/subject';

@Component({
  selector: 'yh-manage-emails',
  templateUrl: './manage-emails.component.html',
  styleUrls: ['./manage-emails.component.scss'],
})
export class ManageEmailsComponent implements OnInit {
  @Input()
  subject: ISubject;

  fgEmails: FormGroup;
  faEmails: FormArray;

  emailRegex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faEmails = this.fb.array([this.createNameItem()]);
    this.fgEmails = this.fb.group({
      faEmails: this.faEmails,
    });
  }

  addItem(): void {
    this.faEmails.push(this.createNameItem());
  }

  private createNameItem(): FormGroup {
    return this.fb.group({
      fcEmail: new FormControl('', Validators.pattern(this.emailRegex)), // needs validators
    });
  }
}
