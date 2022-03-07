import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaicsLookupComponent } from './naics-lookup.component';

describe('NaicsLookupComponent', () => {
  let component: NaicsLookupComponent;
  let fixture: ComponentFixture<NaicsLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaicsLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaicsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
