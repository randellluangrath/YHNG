import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEngineListComponent } from './risk-engine-list.component';

describe('RiskEngineListComponent', () => {
  let component: RiskEngineListComponent;
  let fixture: ComponentFixture<RiskEngineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskEngineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEngineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
