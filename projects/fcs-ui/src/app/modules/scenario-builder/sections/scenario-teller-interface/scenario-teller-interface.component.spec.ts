import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioTellerInterfaceComponent } from './scenario-teller-interface.component';

describe('ScenarioTellerInterfaceComponent', () => {
  let component: ScenarioTellerInterfaceComponent;
  let fixture: ComponentFixture<ScenarioTellerInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioTellerInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioTellerInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
