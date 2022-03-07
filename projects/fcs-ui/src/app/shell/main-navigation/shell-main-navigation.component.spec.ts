import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMainNavigationComponent } from './shell-main-navigation.component';

describe('MainNavigationComponent', () => {
  let component: ShellMainNavigationComponent;
  let fixture: ComponentFixture<ShellMainNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellMainNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellMainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
