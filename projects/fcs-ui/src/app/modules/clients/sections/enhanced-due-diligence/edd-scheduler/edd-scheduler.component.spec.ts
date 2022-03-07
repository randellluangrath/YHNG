import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EddSchedulerComponent } from './edd-scheduler.component';

describe('EddSchedulerComponent', () => {
  let component: EddSchedulerComponent;
  let fixture: ComponentFixture<EddSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EddSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EddSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
