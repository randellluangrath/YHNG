import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioWireOriginationsComponent } from './scenario-wire-originations.component';

describe('ScenarioWireOriginationsComponent', () => {
  let component: ScenarioWireOriginationsComponent;
  let fixture: ComponentFixture<ScenarioWireOriginationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioWireOriginationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioWireOriginationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
