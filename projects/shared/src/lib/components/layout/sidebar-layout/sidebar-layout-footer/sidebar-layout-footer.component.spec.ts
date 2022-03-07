import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutFooterComponent } from './sidebar-layout-footer.component';

describe('SidebarLayoutFooterComponent', () => {
  let component: SidebarLayoutFooterComponent;
  let fixture: ComponentFixture<SidebarLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLayoutFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
