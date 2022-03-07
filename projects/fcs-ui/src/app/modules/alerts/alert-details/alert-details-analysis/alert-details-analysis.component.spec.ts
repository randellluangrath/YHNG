import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDetailsAnalysisComponent } from './alert-details-analysis.component';

describe('AlertDetailsAnalysisComponent', () => {
  let component: AlertDetailsAnalysisComponent;
  let fixture: ComponentFixture<AlertDetailsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDetailsAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
