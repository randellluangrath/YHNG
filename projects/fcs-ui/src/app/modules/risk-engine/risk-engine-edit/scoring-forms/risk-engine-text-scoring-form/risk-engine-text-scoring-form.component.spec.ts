import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEngineTextScoringFormComponent } from './risk-engine-text-scoring-form.component';

describe('RiskEngineScoringFormComponent', () => {
  let component: RiskEngineTextScoringFormComponent;
  let fixture: ComponentFixture<RiskEngineTextScoringFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskEngineTextScoringFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEngineTextScoringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
