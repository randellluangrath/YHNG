import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEngineSchedulingFormComponent } from './risk-engine-scheduling-form.component';

describe('RiskEngineSchedulingFormComponent', () => {
  let component: RiskEngineSchedulingFormComponent;
  let fixture: ComponentFixture<RiskEngineSchedulingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskEngineSchedulingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEngineSchedulingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
