import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarItemComponent } from './sar-item.component';

describe('SarItemComponent', () => {
  let component: SarItemComponent;
  let fixture: ComponentFixture<SarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
