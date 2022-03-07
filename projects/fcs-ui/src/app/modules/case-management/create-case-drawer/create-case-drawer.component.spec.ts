import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseDrawerComponent } from './create-case-drawer.component';

describe('CreateCaseDrawerComponent', () => {
  let component: CreateCaseDrawerComponent;
  let fixture: ComponentFixture<CreateCaseDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCaseDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
