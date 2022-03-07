import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCategoryEditComponent } from './number-category-edit.component';

describe('NumberCategoryEditComponent', () => {
  let component: NumberCategoryEditComponent;
  let fixture: ComponentFixture<NumberCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
