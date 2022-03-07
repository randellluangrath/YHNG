import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsExternalComponent } from './account-details-external.component';

describe('AccountDetailsExternalComponent', () => {
  let component: AccountDetailsExternalComponent;
  let fixture: ComponentFixture<AccountDetailsExternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsExternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
