import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAnswerItemComponent } from './previous-answer-item.component';

describe('PreviousAnswerItemComponent', () => {
  let component: PreviousAnswerItemComponent;
  let fixture: ComponentFixture<PreviousAnswerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousAnswerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousAnswerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
