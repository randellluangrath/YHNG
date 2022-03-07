import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSarsItemComponent } from './open-sars-item.component';

describe('OpenSarsItemComponent', () => {
  let component: OpenSarsItemComponent;
  let fixture: ComponentFixture<OpenSarsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSarsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSarsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
