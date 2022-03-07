import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarHistoryComponent } from './sar-history.component';

describe('SarHistoryComponent', () => {
  let component: SarHistoryComponent;
  let fixture: ComponentFixture<SarHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
