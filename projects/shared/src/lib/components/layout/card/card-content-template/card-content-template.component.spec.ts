import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentTemplateComponent } from './card-content-template.component';

describe('CardContentTemplateComponent', () => {
  let component: CardContentTemplateComponent;
  let fixture: ComponentFixture<CardContentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContentTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
