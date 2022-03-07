import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientManagementNavigationComponent } from './client-management-navigation.component';

describe('ClientManagementNavigationComponent', () => {
  let component: ClientManagementNavigationComponent;
  let fixture: ComponentFixture<ClientManagementNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientManagementNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientManagementNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
