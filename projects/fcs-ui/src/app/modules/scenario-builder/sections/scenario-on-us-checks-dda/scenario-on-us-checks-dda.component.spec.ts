import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioOnUsChecksDdaComponent } from './scenario-on-us-checks-dda.component';

describe('ScenarioOnUsChecksDdaComponent', () => {
  let component: ScenarioOnUsChecksDdaComponent;
  let fixture: ComponentFixture<ScenarioOnUsChecksDdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioOnUsChecksDdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioOnUsChecksDdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
