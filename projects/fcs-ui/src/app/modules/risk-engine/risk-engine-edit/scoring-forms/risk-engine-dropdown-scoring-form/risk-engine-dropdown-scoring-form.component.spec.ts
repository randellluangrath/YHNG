import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEngineDropdownScoringFormComponent } from './risk-engine-dropdown-scoring-form.component';

describe('RiskEngineDropdownScoringFormComponent', () => {
  let component: RiskEngineDropdownScoringFormComponent;
  let fixture: ComponentFixture<RiskEngineDropdownScoringFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskEngineDropdownScoringFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEngineDropdownScoringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
