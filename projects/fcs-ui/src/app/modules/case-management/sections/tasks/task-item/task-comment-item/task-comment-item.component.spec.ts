import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommentItemComponent } from './task-comment-item.component';

describe('TaskCommentItemComponent', () => {
  let component: TaskCommentItemComponent;
  let fixture: ComponentFixture<TaskCommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCommentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
