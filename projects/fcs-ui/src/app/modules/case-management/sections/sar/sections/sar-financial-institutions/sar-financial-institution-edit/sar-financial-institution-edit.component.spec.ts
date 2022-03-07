import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarFinancialInstitutionEditComponent } from './sar-financial-institution-edit.component';

describe('SarFinancialInstitutionEditComponent', () => {
  let component: SarFinancialInstitutionEditComponent;
  let fixture: ComponentFixture<SarFinancialInstitutionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarFinancialInstitutionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarFinancialInstitutionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
