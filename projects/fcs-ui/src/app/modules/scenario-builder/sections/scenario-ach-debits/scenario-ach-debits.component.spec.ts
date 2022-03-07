import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioAchDebitsComponent } from './scenario-ach-debits.component';

describe('ScenarioAchDebitsComponent', () => {
  let component: ScenarioAchDebitsComponent;
  let fixture: ComponentFixture<ScenarioAchDebitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioAchDebitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioAchDebitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
