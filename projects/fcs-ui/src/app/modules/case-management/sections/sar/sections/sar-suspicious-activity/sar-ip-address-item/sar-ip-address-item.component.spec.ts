import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarIpAddressItemComponent } from './sar-ip-address-item.component';

describe('SarIpAddressItemComponent', () => {
  let component: SarIpAddressItemComponent;
  let fixture: ComponentFixture<SarIpAddressItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarIpAddressItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarIpAddressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
