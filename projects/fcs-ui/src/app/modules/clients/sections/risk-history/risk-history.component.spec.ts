import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskHistoryComponent } from './risk-history.component';

describe('RiskHistoryComponent', () => {
  let component: RiskHistoryComponent;
  let fixture: ComponentFixture<RiskHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
