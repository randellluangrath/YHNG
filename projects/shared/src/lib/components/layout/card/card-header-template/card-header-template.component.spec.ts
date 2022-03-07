import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderTemplateComponent } from './card-header-template.component';

describe('CardTitleTemplateComponent', () => {
  let component: CardHeaderTemplateComponent;
  let fixture: ComponentFixture<CardHeaderTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardHeaderTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeaderTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
