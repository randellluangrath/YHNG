import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ISubject, ISubjectPhone } from '@fcs/app/domain/models/subject';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import * as faker from 'faker';
import { ISubjectLookup } from './subject-edit/subject-lookup/subject-lookup.component';

@Component({
  selector: 'yh-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  fgFilters: FormGroup;
  fcFreeText: FormControl = new FormControl();

  showAddNewDrawer: boolean;

  selectedSubject: ISubject;

  subjects: ISubject[] = [];

  // Using this just for the mock
  showEditScreen: boolean = false;

  constructor(private fb: FormBuilder, private mock: MockDataService) {}

  ngOnInit(): void {
    this.fgFilters = this.fb.group({
      fcFreeText: this.fcFreeText,
    });

    for (var i = 0, max = 12; i < max; i++) {
      this.subjects.push(this.mock.createSubject(i));
    }
  }

  selectSubject(subject: ISubject): void {
    this.showAddNewDrawer = false;

    if (this.selectedSubject) {
      this.selectedSubject.isSelected = false;
    }

    if (this.selectedSubject === subject) {
      this.selectedSubject = null;
    } else {
      this.selectedSubject = subject;
      this.selectedSubject.isSelected = true;
    }
  }

  handleAddNew(): void {
    this.showAddNewDrawer = true;
  }

  handleDrawerCancel(): void {
    this.showAddNewDrawer = false;
  }

  handleOnHide(): void {
    this.selectedSubject = null;
  }

  handleSubjectSelected(event: ISubjectLookup): void {
    this.showEditScreen = true;
  }
}
