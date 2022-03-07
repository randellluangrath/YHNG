import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLayoutHeaderTemplateComponent } from './general-layout-header-template.component';

describe('GeneralLayoutHeaderTemplateComponent', () => {
  let component: GeneralLayoutHeaderTemplateComponent;
  let fixture: ComponentFixture<GeneralLayoutHeaderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLayoutHeaderTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLayoutHeaderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
