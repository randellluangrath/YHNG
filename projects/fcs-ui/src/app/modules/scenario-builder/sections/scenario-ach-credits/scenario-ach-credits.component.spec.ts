import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioAchCreditsComponent } from './scenario-ach-credits.component';

describe('ScenarioAchCreditsComponent', () => {
  let component: ScenarioAchCreditsComponent;
  let fixture: ComponentFixture<ScenarioAchCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioAchCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioAchCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
