import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmergeClientsComponent } from './unmerge-clients.component';

describe('UnmergeClientsComponent', () => {
  let component: UnmergeClientsComponent;
  let fixture: ComponentFixture<UnmergeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmergeClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmergeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
