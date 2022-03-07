import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseHistoryDetailsComponent } from './case-history-details.component';

describe('CaseHistoryDetailsComponent', () => {
  let component: CaseHistoryDetailsComponent;
  let fixture: ComponentFixture<CaseHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseHistoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
