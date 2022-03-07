import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLayoutContentSidebarComponent } from './general-layout-content-sidebar.component';

describe('GeneralLayoutContentSidebarComponent', () => {
  let component: GeneralLayoutContentSidebarComponent;
  let fixture: ComponentFixture<GeneralLayoutContentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLayoutContentSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutContentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
