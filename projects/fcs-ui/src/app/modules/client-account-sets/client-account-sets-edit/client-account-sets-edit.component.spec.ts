import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountSetsEditComponent } from './client-account-sets-edit.component';

describe('ClientAccountSetsEditComponent', () => {
  let component: ClientAccountSetsEditComponent;
  let fixture: ComponentFixture<ClientAccountSetsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountSetsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccountSetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
