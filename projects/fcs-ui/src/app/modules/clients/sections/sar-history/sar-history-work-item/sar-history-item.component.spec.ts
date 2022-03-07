import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarHistoryWorkComponent } from './sar-history-item.component';

describe('SarHistoryWorkItemComponent', () => {
  let component: SarHistoryWorkComponent;
  let fixture: ComponentFixture<SarHistoryWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SarHistoryWorkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarHistoryWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
