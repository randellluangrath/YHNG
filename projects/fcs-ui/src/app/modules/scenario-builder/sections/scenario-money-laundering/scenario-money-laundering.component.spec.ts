import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioMoneyLaunderingComponent } from './scenario-money-laundering.component';

describe('ScenarioMoneyLaunderingComponent', () => {
  let component: ScenarioMoneyLaunderingComponent;
  let fixture: ComponentFixture<ScenarioMoneyLaunderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioMoneyLaunderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioMoneyLaunderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
