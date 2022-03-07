import { Component, Input, OnInit } from '@angular/core';
import { ISubjectAddress } from '@fcs/app/domain/models/subject';

/**
 * Presentational component to display an address tied to the Subject.
 * This is different from a normal address in that Subject addresses
 * may be partial.
 */
@Component({
  selector: 'yh-subject-address-item',
  templateUrl: './subject-address-item.component.html',
  styleUrls: ['./subject-address-item.component.scss'],
})
export class SubjectAddressItemComponent implements OnInit {
  @Input()
  address: ISubjectAddress;

  constructor() {}

  ngOnInit(): void {}
}
