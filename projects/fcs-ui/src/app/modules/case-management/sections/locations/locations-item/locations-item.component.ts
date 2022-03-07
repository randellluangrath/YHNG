import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from '@fcs/app/domain/models/locations';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faPhone, faUniversity } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-locations-item',
  templateUrl: './locations-item.component.html',
  styleUrls: ['./locations-item.component.scss'],
})
export class LocationsItemComponent implements OnInit {
  @Input()
  location: ILocation;

  @Input()
  selected: boolean;

  institutionIcon: IconDefinition = faUniversity;
  phoneIcon: IconDefinition = faPhone;
  constructor() {}

  ngOnInit(): void {}
}
