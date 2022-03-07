import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionMapWidgetComponent } from './transaction-map-widget.component';

describe('TransactionMapWidgetComponent', () => {
  let component: TransactionMapWidgetComponent;
  let fixture: ComponentFixture<TransactionMapWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionMapWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionMapWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
