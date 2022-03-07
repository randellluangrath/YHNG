import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarDetailsComponent } from './sar-details.component';

describe('SarDetailsComponent', () => {
  let component: SarDetailsComponent;
  let fixture: ComponentFixture<SarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
