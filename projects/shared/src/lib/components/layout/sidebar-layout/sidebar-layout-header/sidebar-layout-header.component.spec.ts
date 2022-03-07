import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutHeaderComponent } from './sidebar-layout-header.component';

describe('SidebarLayoutHeaderComponent', () => {
  let component: SidebarLayoutHeaderComponent;
  let fixture: ComponentFixture<SidebarLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLayoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
