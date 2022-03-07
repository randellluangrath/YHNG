import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayValueContainerComponent } from './display-value-container.component';

describe('DisplayValueContainerComponent', () => {
  let component: DisplayValueContainerComponent;
  let fixture: ComponentFixture<DisplayValueContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayValueContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayValueContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
