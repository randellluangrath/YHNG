import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsExternalItemComponent } from './account-details-external-item.component';

describe('AccountDetailsExternalItemComponent', () => {
  let component: AccountDetailsExternalItemComponent;
  let fixture: ComponentFixture<AccountDetailsExternalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsExternalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsExternalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
