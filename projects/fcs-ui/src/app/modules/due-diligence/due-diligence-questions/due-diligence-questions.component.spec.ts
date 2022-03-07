import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDiligenceQuestionsComponent } from './due-diligence-questions.component';

describe('DueDiligenceQuestionsComponent', () => {
  let component: DueDiligenceQuestionsComponent;
  let fixture: ComponentFixture<DueDiligenceQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueDiligenceQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDiligenceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
