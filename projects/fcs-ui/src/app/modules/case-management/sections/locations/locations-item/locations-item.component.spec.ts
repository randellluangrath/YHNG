import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsItemComponent } from './locations-item.component';

describe('LocationsItemComponent', () => {
  let component: LocationsItemComponent;
  let fixture: ComponentFixture<LocationsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
