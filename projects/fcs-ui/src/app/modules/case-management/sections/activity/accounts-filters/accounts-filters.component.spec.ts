import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsFiltersComponent } from './accounts-filters.component';

describe('AccountsFiltersComponent', () => {
  let component: AccountsFiltersComponent;
  let fixture: ComponentFixture<AccountsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
