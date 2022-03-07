import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarFinancialInstitutionItemComponent } from './sar-financial-institution-item.component';

describe('SarFinancialInstitutionItemComponent', () => {
  let component: SarFinancialInstitutionItemComponent;
  let fixture: ComponentFixture<SarFinancialInstitutionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarFinancialInstitutionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarFinancialInstitutionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
