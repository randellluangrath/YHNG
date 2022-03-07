import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRiskFactorsDetailsComponent } from './customer-risk-factors-details.component';

describe('CustomerRiskFactorsDetailsComponent', () => {
  let component: CustomerRiskFactorsDetailsComponent;
  let fixture: ComponentFixture<CustomerRiskFactorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRiskFactorsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRiskFactorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
