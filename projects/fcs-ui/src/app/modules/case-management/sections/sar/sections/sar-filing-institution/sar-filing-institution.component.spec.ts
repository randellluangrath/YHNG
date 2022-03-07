import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarFilingInstitutionComponent } from './sar-filing-institution.component';

describe('SarFilingInstitutionComponent', () => {
  let component: SarFilingInstitutionComponent;
  let fixture: ComponentFixture<SarFilingInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarFilingInstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarFilingInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
