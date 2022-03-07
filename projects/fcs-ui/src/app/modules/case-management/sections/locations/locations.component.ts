import { Component, OnInit } from '@angular/core';
import { ILocation } from '@fcs/app/domain/models/locations';
import * as faker from 'faker';

@Component({
  selector: 'yh-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations: ILocation[] = [];

  selectedLocation: ILocation;

  showLocationsForm: boolean;

  showLocationsLookup: boolean;

  constructor() {}

  ngOnInit(): void {
    this.locations = Array.from(new Array(50), (i, k) => {
      return this.generateItem(i);
    });
  }

  handleOnHide(): void {
    this.showLocationsLookup = false;
  }

  selectItem(location: ILocation): void {
    this.showLocationsForm = false;

    if (this.selectedLocation === location) {
      this.selectedLocation = null;
    } else {
      this.selectedLocation = location;
    }
  }
  handleAddNew(): void {
    this.selectedLocation = null;
    this.showLocationsForm = true;
  }

  generateItem(id: number): ILocation {
    return {
      name: faker.company.companyName(),
      branchNumber: faker.random.number(),
      region: faker.random.number(),
      phone: '1231231233',
      address: {
        addressLineOne: '1234 Autumn Springs Ct',
        addressLineTwo: '',
        addressLineThree: '',
        city: 'Franklin',
        state: 'TN',
        zipCode: '37067',
      },
    };
  }
}
