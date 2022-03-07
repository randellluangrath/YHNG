import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarCyberEventEditComponent } from './sar-cyber-event-edit.component';

describe('SarCyberEventEditComponent', () => {
  let component: SarCyberEventEditComponent;
  let fixture: ComponentFixture<SarCyberEventEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarCyberEventEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarCyberEventEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
