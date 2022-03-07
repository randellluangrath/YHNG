import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioEftComponent } from './scenario-eft.component';

describe('ScenarioEftComponent', () => {
  let component: ScenarioEftComponent;
  let fixture: ComponentFixture<ScenarioEftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioEftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioEftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
