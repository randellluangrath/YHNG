import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLayoutContentComponent } from './general-layout-content.component';

describe('GeneralLayoutContentComponent', () => {
  let component: GeneralLayoutContentComponent;
  let fixture: ComponentFixture<GeneralLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLayoutContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
