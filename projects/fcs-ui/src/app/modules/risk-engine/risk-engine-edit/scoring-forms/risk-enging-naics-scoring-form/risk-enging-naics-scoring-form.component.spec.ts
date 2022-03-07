import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEngingNaicsScoringFormComponent } from './risk-enging-naics-scoring-form.component';

describe('RiskEngingNaicsScoringFormComponent', () => {
  let component: RiskEngingNaicsScoringFormComponent;
  let fixture: ComponentFixture<RiskEngingNaicsScoringFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskEngingNaicsScoringFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEngingNaicsScoringFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
