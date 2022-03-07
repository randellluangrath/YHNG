import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ILocation } from '@fcs/app/domain/models/locations';
import { MockDataService } from '@fcs/app/services/mock-data.service';

@Component({
  selector: 'yh-location-lookup',
  templateUrl: './location-lookup.component.html',
  styleUrls: ['./location-lookup.component.scss'],
})
export class LocationLookupComponent implements OnInit {
  fgLookup: FormGroup;
  fcInstitution: FormControl = new FormControl();
  fcRegions: FormControl = new FormControl();
  fcBranches: FormControl = new FormControl();

  locations: ILocation[] = Array.from(new Array(20), () =>
    this.mock.createLocation()
  );

  constructor(private fb: FormBuilder, private mock: MockDataService) {}

  ngOnInit(): void {
    this.fgLookup = this.fb.group({
      fcInstitution: this.fcInstitution,
      fcRegions: this.fcRegions,
      fcBranches: this.fcBranches,
    });
  }
}
