import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsWigetComponent } from './notifications-wiget.component';

describe('NotificationsWigetComponent', () => {
  let component: NotificationsWigetComponent;
  let fixture: ComponentFixture<NotificationsWigetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsWigetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsWigetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
