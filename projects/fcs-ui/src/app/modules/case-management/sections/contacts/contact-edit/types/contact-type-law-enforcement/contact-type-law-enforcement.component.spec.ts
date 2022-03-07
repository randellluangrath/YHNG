import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTypeLawEnforcementComponent } from './contact-type-law-enforcement.component';

describe('ContactTypeLawEnforcementComponent', () => {
  let component: ContactTypeLawEnforcementComponent;
  let fixture: ComponentFixture<ContactTypeLawEnforcementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTypeLawEnforcementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTypeLawEnforcementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
