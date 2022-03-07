import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenItemsPanelComponent } from './open-items-panel.component';

describe('OpenItemsPanelComponent', () => {
  let component: OpenItemsPanelComponent;
  let fixture: ComponentFixture<OpenItemsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenItemsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenItemsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
