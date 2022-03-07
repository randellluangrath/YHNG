import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarBranchItemComponent } from './sar-branch-item.component';

describe('SarBranchItemComponent', () => {
  let component: SarBranchItemComponent;
  let fixture: ComponentFixture<SarBranchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarBranchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarBranchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
