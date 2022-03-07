import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsInternalComponent } from './account-details-internal.component';

describe('AccountDetailsInternalComponent', () => {
  let component: AccountDetailsInternalComponent;
  let fixture: ComponentFixture<AccountDetailsInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
