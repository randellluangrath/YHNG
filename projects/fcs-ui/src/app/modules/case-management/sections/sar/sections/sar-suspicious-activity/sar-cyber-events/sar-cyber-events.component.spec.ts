import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarCyberEventsComponent } from './sar-cyber-events.component';

describe('SarCyberEventsComponent', () => {
  let component: SarCyberEventsComponent;
  let fixture: ComponentFixture<SarCyberEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarCyberEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarCyberEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
