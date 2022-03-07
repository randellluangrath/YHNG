import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';

@UntilDestroy()
@Component({
  selector: 'yh-range-category-edit',
  templateUrl: './range-category-edit.component.html',
  styleUrls: ['./range-category-edit.component.scss'],
})
export class RangeCategoryEditComponent implements OnInit {
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
    var group = this.fb.group({
      fcLower: new FormControl(),
      fcUpper: new FormControl(), // needs validators
      fcNoUpper: new FormControl(),
      fcScore: new FormControl(),
    });

    group.controls.fcNoUpper.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((enabled: boolean) => {
        if (enabled) {
          group.controls.fcUpper.disable();
        } else {
          group.controls.fcUpper.enable();
        }
      });

    return group;
  }
}
