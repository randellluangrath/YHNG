import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDetailsHistoryComponent } from './alert-details-history.component';

describe('AlertDetailsHistoryComponent', () => {
  let component: AlertDetailsHistoryComponent;
  let fixture: ComponentFixture<AlertDetailsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
