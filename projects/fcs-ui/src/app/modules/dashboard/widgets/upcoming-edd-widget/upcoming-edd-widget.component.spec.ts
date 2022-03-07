import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEddWidgetComponent } from './upcoming-edd-widget.component';

describe('UpcomingEddWidgetComponent', () => {
  let component: UpcomingEddWidgetComponent;
  let fixture: ComponentFixture<UpcomingEddWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingEddWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEddWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
