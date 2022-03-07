import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarGeneralComponent } from './sar-general.component';

describe('SarGeneralComponent', () => {
  let component: SarGeneralComponent;
  let fixture: ComponentFixture<SarGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
