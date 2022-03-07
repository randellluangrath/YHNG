import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTransactionsComponent } from './activity-transactions.component';

describe('ActivityTransactionsComponent', () => {
  let component: ActivityTransactionsComponent;
  let fixture: ComponentFixture<ActivityTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
