import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeClientsComponent } from './merge-clients.component';

describe('MergeClientsComponent', () => {
  let component: MergeClientsComponent;
  let fixture: ComponentFixture<MergeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
