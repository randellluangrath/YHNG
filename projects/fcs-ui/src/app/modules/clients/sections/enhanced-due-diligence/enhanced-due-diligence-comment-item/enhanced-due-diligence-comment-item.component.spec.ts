import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedDueDiligenceCommentItemComponent } from './enhanced-due-diligence-comment-item.component';

describe('EnhancedDueDiligenceCommentItemComponent', () => {
  let component: EnhancedDueDiligenceCommentItemComponent;
  let fixture: ComponentFixture<EnhancedDueDiligenceCommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancedDueDiligenceCommentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedDueDiligenceCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
