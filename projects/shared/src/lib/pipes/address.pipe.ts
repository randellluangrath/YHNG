import { Injectable, Pipe } from '@angular/core';
import { IAddress } from '@fcs/app/domain/models/address';

@Pipe({
  name: 'address',
})
export class AddressPipe {
  transform(address: IAddress) {
    if (address) {
      return `${address.addressLineOne} ${address.city}, ${address.state} ${address.zipCode}`;
    }
    return '';
  }
}
