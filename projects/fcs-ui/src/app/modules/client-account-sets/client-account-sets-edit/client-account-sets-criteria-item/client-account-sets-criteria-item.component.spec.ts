import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountSetsCriteriaItemComponent } from './client-account-sets-criteria-item.component';

describe('ClientAccountSetsCriteriaItemComponent', () => {
  let component: ClientAccountSetsCriteriaItemComponent;
  let fixture: ComponentFixture<ClientAccountSetsCriteriaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountSetsCriteriaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountSetsCriteriaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
