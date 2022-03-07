import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioDepositsDdaComponent } from './scenario-deposits-dda.component';

describe('ScenarioDepositsDdaComponent', () => {
  let component: ScenarioDepositsDdaComponent;
  let fixture: ComponentFixture<ScenarioDepositsDdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioDepositsDdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioDepositsDdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
