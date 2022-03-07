import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioEngineNavigationComponent } from './scenario-engine-navigation.component';

describe('ScenarioEngineNavigationComponent', () => {
  let component: ScenarioEngineNavigationComponent;
  let fixture: ComponentFixture<ScenarioEngineNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioEngineNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioEngineNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
