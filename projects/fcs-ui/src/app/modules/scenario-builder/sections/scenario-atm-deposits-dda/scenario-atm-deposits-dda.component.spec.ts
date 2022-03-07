import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioAtmDepositsDdaComponent } from './scenario-atm-deposits-dda.component';

describe('ScenarioAtmDepositsDdaComponent', () => {
  let component: ScenarioAtmDepositsDdaComponent;
  let fixture: ComponentFixture<ScenarioAtmDepositsDdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioAtmDepositsDdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioAtmDepositsDdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
