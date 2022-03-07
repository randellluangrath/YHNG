import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCriteriaDialogComponent } from './create-criteria-dialog.component';

describe('CreateCriteriaDialogComponent', () => {
  let component: CreateCriteriaDialogComponent;
  let fixture: ComponentFixture<CreateCriteriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCriteriaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCriteriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
