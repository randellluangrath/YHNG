import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarHistoryDetailsComponent } from './sar-history-details.component';

describe('SarHistoryDetailsComponent', () => {
  let component: SarHistoryDetailsComponent;
  let fixture: ComponentFixture<SarHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarHistoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
