import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarWorkflowDrawerComponent } from './sar-workflow-drawer.component';

describe('SarWorkflowDrawerComponent', () => {
  let component: SarWorkflowDrawerComponent;
  let fixture: ComponentFixture<SarWorkflowDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarWorkflowDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarWorkflowDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
