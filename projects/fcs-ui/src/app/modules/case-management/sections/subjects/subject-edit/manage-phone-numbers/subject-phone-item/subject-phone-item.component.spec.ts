import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPhoneItemComponent } from './subject-phone-item.component';

describe('SubjectPhoneItemComponent', () => {
  let component: SubjectPhoneItemComponent;
  let fixture: ComponentFixture<SubjectPhoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPhoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPhoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
