import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountSetsListComponent } from './client-account-sets-list.component';

describe('ClientAccountSetsListComponent', () => {
  let component: ClientAccountSetsListComponent;
  let fixture: ComponentFixture<ClientAccountSetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountSetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountSetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
