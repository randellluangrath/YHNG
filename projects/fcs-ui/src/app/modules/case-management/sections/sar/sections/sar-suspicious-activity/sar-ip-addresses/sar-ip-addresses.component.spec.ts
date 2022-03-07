import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarIpAddressesComponent } from './sar-ip-addresses.component';

describe('SarIpAddressesComponent', () => {
  let component: SarIpAddressesComponent;
  let fixture: ComponentFixture<SarIpAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarIpAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarIpAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
