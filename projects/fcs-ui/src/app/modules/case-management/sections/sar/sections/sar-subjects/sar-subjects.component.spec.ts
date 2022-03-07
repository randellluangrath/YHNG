import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarSubjectsComponent } from './sar-subjects.component';

describe('SarSubjectsComponent', () => {
  let component: SarSubjectsComponent;
  let fixture: ComponentFixture<SarSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
