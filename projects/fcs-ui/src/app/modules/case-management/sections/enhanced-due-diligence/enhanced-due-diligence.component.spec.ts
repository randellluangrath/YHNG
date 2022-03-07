import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedDueDiligenceComponent } from './enhanced-due-diligence.component';

describe('EnhancedDueDiligenceComponent', () => {
  let component: EnhancedDueDiligenceComponent;
  let fixture: ComponentFixture<EnhancedDueDiligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancedDueDiligenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedDueDiligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
