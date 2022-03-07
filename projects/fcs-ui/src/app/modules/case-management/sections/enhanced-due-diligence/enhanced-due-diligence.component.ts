import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as faker from 'faker';
import { MenuItem } from 'primeng/api';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'yh-enhanced-due-diligence',
  templateUrl: './enhanced-due-diligence.component.html',
  styleUrls: ['./enhanced-due-diligence.component.scss'],
})
export class EnhancedDueDiligenceComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Current',
      command: () => {
        this.viewState$.next(ViewState.Current);
      },
    },
    {
      label: 'History',
      command: () => {
        this.viewState$.next(ViewState.History);
      },
    },
  ];

  activeItem: MenuItem;

  ViewState = ViewState;

  viewState$: BehaviorSubject<ViewState> = new BehaviorSubject<ViewState>(
    ViewState.Current
  );

  questions: IEddQuestion[] = Array.from(new Array(25), () => {
    return {
      question: faker.lorem.sentence(),
      checked: false,
    };
  });

  showQuestionaire: boolean = false;

  saveOptions: MenuItem[] = [
    {
      label: 'Save',
      icon: 'pi pi-save',
    },
    {
      label: 'Complete',
      icon: 'pi pi-check-circle',
    },
  ];

  fgQuestionnaire: FormGroup;
  fcQuestionnaire: FormControl = new FormControl();

  pastOptions: FieldOption<string>[] = [
    new FieldOption('10/10/2021', ''),
    new FieldOption('06/12/2021', ''),
    new FieldOption('02/05/2021', ''),
    new FieldOption('08/30/2020', ''),
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgQuestionnaire = this.fb.group({
      fcQuestionnaire: this.fcQuestionnaire,
    });
  }
  handleOnHide(): void {
    this.showQuestionaire = false;
  }

  showQuestionaireForm(): void {
    this.showQuestionaire = true;
  }
}

interface IEddQuestion {
  question: string;
  checked: boolean;
}

enum ViewState {
  Current,
  History,
}
