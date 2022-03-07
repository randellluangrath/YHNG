import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHistoryItemComponent } from './case-history-item.component';

describe('CaseHistoryItemComponent', () => {
  let component: CaseHistoryItemComponent;
  let fixture: ComponentFixture<CaseHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
