import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarWizardComponent } from './sar-wizard.component';

describe('SarWizardComponent', () => {
  let component: SarWizardComponent;
  let fixture: ComponentFixture<SarWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
