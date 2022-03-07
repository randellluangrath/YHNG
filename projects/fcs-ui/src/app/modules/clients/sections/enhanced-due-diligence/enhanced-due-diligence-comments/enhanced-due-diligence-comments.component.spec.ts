import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedDueDiligenceCommentsComponent } from './enhanced-due-diligence-comments.component';

describe('EnhancedDueDiligenceCommentsComponent', () => {
  let component: EnhancedDueDiligenceCommentsComponent;
  let fixture: ComponentFixture<EnhancedDueDiligenceCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancedDueDiligenceCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedDueDiligenceCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
