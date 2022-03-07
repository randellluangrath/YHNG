import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarFinancialInstitutionsComponent } from './sar-financial-institutions.component';

describe('SarFinancialInstitutionsComponent', () => {
  let component: SarFinancialInstitutionsComponent;
  let fixture: ComponentFixture<SarFinancialInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarFinancialInstitutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarFinancialInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
