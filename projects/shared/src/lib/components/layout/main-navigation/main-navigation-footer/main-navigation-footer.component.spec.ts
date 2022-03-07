import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationFooterComponent } from './main-navigation-footer.component';

describe('MainNavigationFooterComponent', () => {
  let component: MainNavigationFooterComponent;
  let fixture: ComponentFixture<MainNavigationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
