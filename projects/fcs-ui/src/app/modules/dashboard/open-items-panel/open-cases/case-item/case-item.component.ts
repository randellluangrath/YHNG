import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as falStar } from '@fortawesome/pro-light-svg-icons';
import { IDashboardCaseItem } from '../open-cases.component';

@Component({
  selector: 'yh-case-item',
  templateUrl: './case-item.component.html',
  styleUrls: ['./case-item.component.scss'],
})
export class CaseItemComponent implements OnInit {
  @Input()
  case: IDashboardCaseItem;

  highImportanceIconFilled: IconDefinition = fasStar;
  highImportanceIconOutlined: IconDefinition = falStar;

  constructor() {}

  ngOnInit(): void {}
}
