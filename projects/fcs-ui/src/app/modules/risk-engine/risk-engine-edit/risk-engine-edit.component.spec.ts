import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEngineEditComponent } from './risk-engine-edit.component';

describe('RiskEngineEditComponent', () => {
  let component: RiskEngineEditComponent;
  let fixture: ComponentFixture<RiskEngineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskEngineEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEngineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
