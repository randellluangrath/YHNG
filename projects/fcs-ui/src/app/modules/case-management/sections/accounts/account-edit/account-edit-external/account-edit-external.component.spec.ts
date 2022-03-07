import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEditExternalComponent } from './account-edit-external.component';

describe('AccountEditExternalComponent', () => {
  let component: AccountEditExternalComponent;
  let fixture: ComponentFixture<AccountEditExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEditExternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEditExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
