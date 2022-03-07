import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLookupComponent } from './subject-lookup.component';

describe('SubjectLookupComponent', () => {
  let component: SubjectLookupComponent;
  let fixture: ComponentFixture<SubjectLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
