import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsEditComponent } from './locations-edit.component';

describe('LocationsEditComponent', () => {
  let component: LocationsEditComponent;
  let fixture: ComponentFixture<LocationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
