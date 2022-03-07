import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarCyberEventItemComponent } from './sar-cyber-event-item.component';

describe('SarCyberEventItemComponent', () => {
  let component: SarCyberEventItemComponent;
  let fixture: ComponentFixture<SarCyberEventItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarCyberEventItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarCyberEventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
