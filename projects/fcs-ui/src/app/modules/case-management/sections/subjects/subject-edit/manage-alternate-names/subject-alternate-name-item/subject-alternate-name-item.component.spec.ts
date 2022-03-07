import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAlternateNameItemComponent } from './subject-alternate-name-item.component';

describe('SubjectAlternateNameItemComponent', () => {
  let component: SubjectAlternateNameItemComponent;
  let fixture: ComponentFixture<SubjectAlternateNameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAlternateNameItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAlternateNameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
