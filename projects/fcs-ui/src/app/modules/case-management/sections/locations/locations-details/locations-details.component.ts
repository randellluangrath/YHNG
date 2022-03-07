import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILocation } from '@fcs/app/domain/models/locations';

@Component({
  selector: 'yh-locations-details',
  templateUrl: './locations-details.component.html',
  styleUrls: ['./locations-details.component.scss'],
})
export class LocationsDetailsComponent implements OnInit {
  @Input()
  location: ILocation;

  @Output()
  close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnInit(): void {}

  handleClose(event: MouseEvent): void {
    this.close.emit(event);
  }
}
