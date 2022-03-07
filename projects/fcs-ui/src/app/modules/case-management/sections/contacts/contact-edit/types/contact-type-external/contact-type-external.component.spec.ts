import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTypeExternalComponent } from './contact-type-external.component';

describe('ContactTypeExternalComponent', () => {
  let component: ContactTypeExternalComponent;
  let fixture: ComponentFixture<ContactTypeExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTypeExternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTypeExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
