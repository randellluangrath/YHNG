import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioPointOfSaleDebitsDdaComponent } from './scenario-point-of-sale-debits-dda.component';

describe('ScenarioPointOfSaleDebitsDdaComponent', () => {
  let component: ScenarioPointOfSaleDebitsDdaComponent;
  let fixture: ComponentFixture<ScenarioPointOfSaleDebitsDdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioPointOfSaleDebitsDdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioPointOfSaleDebitsDdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
