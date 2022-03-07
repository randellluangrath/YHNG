import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCategoryEditComponent } from './state-category-edit.component';

describe('StateCategoryEditComponent', () => {
  let component: StateCategoryEditComponent;
  let fixture: ComponentFixture<StateCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
