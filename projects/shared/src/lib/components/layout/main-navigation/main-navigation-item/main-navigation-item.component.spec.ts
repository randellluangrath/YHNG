import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationItemComponent } from './main-navigation-item.component';

describe('MainNavigationItemComponent', () => {
  let component: MainNavigationItemComponent;
  let fixture: ComponentFixture<MainNavigationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
