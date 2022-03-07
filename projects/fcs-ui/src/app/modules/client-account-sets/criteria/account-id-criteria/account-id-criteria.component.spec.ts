import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountIdCriteriaComponent } from './account-id-criteria.component';

describe('AccountIdCriteriaComponent', () => {
  let component: AccountIdCriteriaComponent;
  let fixture: ComponentFixture<AccountIdCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountIdCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountIdCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
