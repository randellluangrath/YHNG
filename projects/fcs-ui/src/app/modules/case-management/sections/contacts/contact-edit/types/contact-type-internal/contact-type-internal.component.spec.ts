import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTypeInternalComponent } from './contact-type-internal.component';

describe('ContactTypeInternalComponent', () => {
  let component: ContactTypeInternalComponent;
  let fixture: ComponentFixture<ContactTypeInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTypeInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTypeInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
