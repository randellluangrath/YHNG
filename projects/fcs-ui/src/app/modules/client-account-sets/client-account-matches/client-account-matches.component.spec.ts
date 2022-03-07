import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountMatchesComponent } from './client-account-matches.component';

describe('ClientAccountMatchesComponent', () => {
  let component: ClientAccountMatchesComponent;
  let fixture: ComponentFixture<ClientAccountMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
