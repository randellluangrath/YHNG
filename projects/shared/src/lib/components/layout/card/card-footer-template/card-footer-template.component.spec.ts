import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterTemplateComponent } from './card-footer-template.component';

describe('CardFooterTemplateComponent', () => {
  let component: CardFooterTemplateComponent;
  let fixture: ComponentFixture<CardFooterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFooterTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFooterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
