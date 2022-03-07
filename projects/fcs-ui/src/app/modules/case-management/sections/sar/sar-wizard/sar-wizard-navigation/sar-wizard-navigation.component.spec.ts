import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarWizardNavigationComponent } from './sar-wizard-navigation.component';

describe('SarWizardNavigationComponent', () => {
  let component: SarWizardNavigationComponent;
  let fixture: ComponentFixture<SarWizardNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarWizardNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarWizardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
