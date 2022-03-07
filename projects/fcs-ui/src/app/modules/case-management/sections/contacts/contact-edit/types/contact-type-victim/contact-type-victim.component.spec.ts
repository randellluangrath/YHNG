import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTypeVictimComponent } from './contact-type-victim.component';

describe('ContactTypeVictimComponent', () => {
  let component: ContactTypeVictimComponent;
  let fixture: ComponentFixture<ContactTypeVictimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTypeVictimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTypeVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
