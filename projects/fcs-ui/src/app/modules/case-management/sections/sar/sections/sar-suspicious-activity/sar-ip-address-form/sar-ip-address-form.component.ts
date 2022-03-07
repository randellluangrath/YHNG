import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISarSubjectIpAddress } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-ip-address-form',
  templateUrl: './sar-ip-address-form.component.html',
  styleUrls: ['./sar-ip-address-form.component.scss'],
})
export class SarIpAddressFormComponent implements OnInit {
  @Output()
  onSave: EventEmitter<ISarSubjectIpAddress> = new EventEmitter<ISarSubjectIpAddress>();

  @Output()
  onCancel: EventEmitter<void> = new EventEmitter<void>();

  fgAddress: FormGroup;
  fcAddress: FormControl = new FormControl();
  fcDate: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgAddress = this.fb.group({
      fcAddress: this.fcAddress,
      fcDate: this.fcDate,
    });
  }

  cancelItem(): void {
    this.fgAddress.reset();
    this.onCancel.emit();
  }

  saveItem(): void {
    if (this.fgAddress.valid) {
      this.onSave.emit({
        address: this.fcAddress.value,
        date: this.fcDate.value,
      });
    }
  }
}
