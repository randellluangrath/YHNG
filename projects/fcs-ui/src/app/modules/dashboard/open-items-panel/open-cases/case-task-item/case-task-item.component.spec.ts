import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTaskItemComponent } from './case-task-item.component';

describe('CaseTaskItemComponent', () => {
  let component: CaseTaskItemComponent;
  let fixture: ComponentFixture<CaseTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseTaskItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
