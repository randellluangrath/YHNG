import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeCategoryEditComponent } from './range-category-edit.component';

describe('RangeCategoryEditComponent', () => {
  let component: RangeCategoryEditComponent;
  let fixture: ComponentFixture<RangeCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
