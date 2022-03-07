import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarSubjectLookupComponent } from './sar-subject-lookup.component';

describe('SarSubjectLookupComponent', () => {
  let component: SarSubjectLookupComponent;
  let fixture: ComponentFixture<SarSubjectLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarSubjectLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarSubjectLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
