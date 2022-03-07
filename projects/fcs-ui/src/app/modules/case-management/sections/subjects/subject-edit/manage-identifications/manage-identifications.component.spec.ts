import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageIdentificationsComponent } from './manage-identifications.component';

describe('ManageIdentificationsComponent', () => {
  let component: ManageIdentificationsComponent;
  let fixture: ComponentFixture<ManageIdentificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageIdentificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIdentificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
