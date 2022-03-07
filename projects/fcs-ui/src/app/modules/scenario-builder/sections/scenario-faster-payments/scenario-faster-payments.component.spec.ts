import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioFasterPaymentsComponent } from './scenario-faster-payments.component';

describe('ScenarioFasterPaymentsComponent', () => {
  let component: ScenarioFasterPaymentsComponent;
  let fixture: ComponentFixture<ScenarioFasterPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioFasterPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioFasterPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
