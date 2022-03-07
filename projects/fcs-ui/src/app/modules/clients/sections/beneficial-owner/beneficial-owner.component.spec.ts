import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficialOwnerComponent } from './beneficial-owner.component';

describe('BeneficialOwnerComponent', () => {
  let component: BeneficialOwnerComponent;
  let fixture: ComponentFixture<BeneficialOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficialOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficialOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
