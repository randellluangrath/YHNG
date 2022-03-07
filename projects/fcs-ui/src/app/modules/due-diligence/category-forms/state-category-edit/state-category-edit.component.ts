import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'yh-state-category-edit',
  templateUrl: './state-category-edit.component.html',
  styleUrls: ['./state-category-edit.component.scss'],
})
export class StateCategoryEditComponent implements OnInit {
  fgAnswers: FormGroup;
  faAnswers: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.faAnswers = this.fb.array([this.createNameItem()]);
    this.fgAnswers = this.fb.group({
      faAnswers: this.faAnswers,
    });
  }

  addItem(): void {
    this.faAnswers.push(this.createNameItem());
  }

  removeItem(index: number): void {
    if (this.faAnswers.length === 1) {
      return;
    }
    this.faAnswers.removeAt(index);
  }
  private createNameItem(): FormGroup {
    return this.fb.group({
      fcAnswer: new FormControl(), // needs validators
      fcScore: new FormControl(),
    });
  }
}
