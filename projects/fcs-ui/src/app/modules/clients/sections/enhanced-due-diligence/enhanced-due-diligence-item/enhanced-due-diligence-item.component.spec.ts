import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedDueDiligenceItemComponent } from './enhanced-due-diligence-item.component';

describe('EnhancedDueDiligenceItemComponent', () => {
  let component: EnhancedDueDiligenceItemComponent;
  let fixture: ComponentFixture<EnhancedDueDiligenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancedDueDiligenceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancedDueDiligenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
