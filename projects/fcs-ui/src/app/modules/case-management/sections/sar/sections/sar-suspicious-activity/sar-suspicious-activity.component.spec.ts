import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarSuspiciousActivityComponent } from './sar-suspicious-activity.component';

describe('SarSuspiciousActivityComponent', () => {
  let component: SarSuspiciousActivityComponent;
  let fixture: ComponentFixture<SarSuspiciousActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarSuspiciousActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarSuspiciousActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
