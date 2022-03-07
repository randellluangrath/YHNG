import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchItemComponent } from './client-search-item.component';

describe('ClientSearchItemComponent', () => {
  let component: ClientSearchItemComponent;
  let fixture: ComponentFixture<ClientSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
