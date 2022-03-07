import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectIdentificationItemComponent } from './subject-identification-item.component';

describe('SubjectIdentificationItemComponent', () => {
  let component: SubjectIdentificationItemComponent;
  let fixture: ComponentFixture<SubjectIdentificationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectIdentificationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectIdentificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
