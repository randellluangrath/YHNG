import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { ISubject } from '@fcs/app/domain/models/subject';

@Component({
  selector: 'yh-manage-websites',
  templateUrl: './manage-websites.component.html',
  styleUrls: ['./manage-websites.component.scss'],
})
export class ManageWebsitesComponent implements OnInit {
  @Input()
  subject: ISubject;

  fgWebsites: FormGroup;
  faWebsites: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faWebsites = this.fb.array([this.createNameItem()]);
    this.fgWebsites = this.fb.group({
      faWebsites: this.faWebsites,
    });
  }

  addItem(): void {
    this.faWebsites.push(this.createNameItem());
  }

  private createNameItem(): FormGroup {
    return this.fb.group({
      fcWebsite: '', // needs validators
    });
  }
}
