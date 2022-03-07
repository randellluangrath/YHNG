import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarIpAddressFormComponent } from './sar-ip-address-form.component';

describe('SarIpAddressFormComponent', () => {
  let component: SarIpAddressFormComponent;
  let fixture: ComponentFixture<SarIpAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarIpAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarIpAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
