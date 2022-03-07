import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsCommentComponent } from './account-details-comment.component';

describe('AccountDetailsCommentComponent', () => {
  let component: AccountDetailsCommentComponent;
  let fixture: ComponentFixture<AccountDetailsCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
