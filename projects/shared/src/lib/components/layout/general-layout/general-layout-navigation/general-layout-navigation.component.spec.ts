import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLayoutNavigationComponent } from './general-layout-navigation.component';

describe('GeneralLayoutNavigationComponent', () => {
  let component: GeneralLayoutNavigationComponent;
  let fixture: ComponentFixture<GeneralLayoutNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLayoutNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
