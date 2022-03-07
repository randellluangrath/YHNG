import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSarsComponent } from './open-sars.component';

describe('OpenSarsComponent', () => {
  let component: OpenSarsComponent;
  let fixture: ComponentFixture<OpenSarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
