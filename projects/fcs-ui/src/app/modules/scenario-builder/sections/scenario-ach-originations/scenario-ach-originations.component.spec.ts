import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioAchOriginationsComponent } from './scenario-ach-originations.component';

describe('ScenarioAchOriginationsComponent', () => {
  let component: ScenarioAchOriginationsComponent;
  let fixture: ComponentFixture<ScenarioAchOriginationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioAchOriginationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioAchOriginationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
