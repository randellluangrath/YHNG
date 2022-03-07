import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAlternateNamesComponent } from './manage-alternate-names.component';

describe('ManageAlternateNamesComponent', () => {
  let component: ManageAlternateNamesComponent;
  let fixture: ComponentFixture<ManageAlternateNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAlternateNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAlternateNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
