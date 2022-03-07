import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWebsitesComponent } from './manage-websites.component';

describe('ManageWebsitesComponent', () => {
  let component: ManageWebsitesComponent;
  let fixture: ComponentFixture<ManageWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
