import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarBranchEditComponent } from './sar-branch-edit.component';

describe('SarBranchEditComponent', () => {
  let component: SarBranchEditComponent;
  let fixture: ComponentFixture<SarBranchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarBranchEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarBranchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
