import { Component, Input, OnInit } from '@angular/core';
import { ISarFinancialIntstitution } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-financial-institution-item',
  templateUrl: './sar-financial-institution-item.component.html',
  styleUrls: ['./sar-financial-institution-item.component.scss'],
})
export class SarFinancialInstitutionItemComponent implements OnInit {
  @Input()
  institution: ISarFinancialIntstitution;

  constructor() {}

  ngOnInit(): void {}
}
