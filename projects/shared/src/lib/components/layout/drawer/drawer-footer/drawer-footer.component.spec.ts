import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerFooterComponent } from './drawer-footer.component';

describe('DrawerFooterComponent', () => {
  let component: DrawerFooterComponent;
  let fixture: ComponentFixture<DrawerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
