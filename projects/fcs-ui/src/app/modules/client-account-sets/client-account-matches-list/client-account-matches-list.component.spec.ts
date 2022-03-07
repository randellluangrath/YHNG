import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountMatchesListComponent } from './client-account-matches-list.component';

describe('ClientAccountMatchesListComponent', () => {
  let component: ClientAccountMatchesListComponent;
  let fixture: ComponentFixture<ClientAccountMatchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountMatchesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
