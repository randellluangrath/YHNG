import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarSubjectItemComponent } from './sar-subject-item.component';

describe('SarSubjectItemComponent', () => {
  let component: SarSubjectItemComponent;
  let fixture: ComponentFixture<SarSubjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarSubjectItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarSubjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
