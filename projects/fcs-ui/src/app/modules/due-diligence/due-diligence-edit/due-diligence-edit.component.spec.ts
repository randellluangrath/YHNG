import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDiligenceEditComponent } from './due-diligence-edit.component';

describe('DueDiligenceEditComponent', () => {
  let component: DueDiligenceEditComponent;
  let fixture: ComponentFixture<DueDiligenceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueDiligenceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDiligenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
