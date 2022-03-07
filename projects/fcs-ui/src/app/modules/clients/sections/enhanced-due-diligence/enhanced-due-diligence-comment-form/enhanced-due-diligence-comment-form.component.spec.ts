import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedDueDiligenceCommentFormComponent } from './enhanced-due-diligence-comment-form.component';

describe('EnhancedDueDiligenceCommentFormComponent', () => {
  let component: EnhancedDueDiligenceCommentFormComponent;
  let fixture: ComponentFixture<EnhancedDueDiligenceCommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancedDueDiligenceCommentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedDueDiligenceCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
