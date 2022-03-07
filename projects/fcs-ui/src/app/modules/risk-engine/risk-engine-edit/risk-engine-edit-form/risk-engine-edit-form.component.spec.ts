import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEngineEditFormComponent } from './risk-engine-edit-form.component';

describe('RiskEngineEditFormComponent', () => {
  let component: RiskEngineEditFormComponent;
  let fixture: ComponentFixture<RiskEngineEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskEngineEditFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEngineEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
