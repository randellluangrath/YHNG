import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDetailsTransactionsComponent } from './alert-details-transactions.component';

describe('AlertDetailsTransactionsComponent', () => {
  let component: AlertDetailsTransactionsComponent;
  let fixture: ComponentFixture<AlertDetailsTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
