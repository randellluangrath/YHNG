import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLayoutSidebarComponent } from './general-layout-sidebar.component';

describe('GeneralLayoutSidebarComponent', () => {
  let component: GeneralLayoutSidebarComponent;
  let fixture: ComponentFixture<GeneralLayoutSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLayoutSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
