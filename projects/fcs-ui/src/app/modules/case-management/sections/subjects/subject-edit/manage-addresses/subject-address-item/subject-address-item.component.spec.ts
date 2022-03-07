import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddressItemComponent } from './subject-address-item.component';

describe('SubjectAddressItemComponent', () => {
  let component: SubjectAddressItemComponent;
  let fixture: ComponentFixture<SubjectAddressItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAddressItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAddressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
