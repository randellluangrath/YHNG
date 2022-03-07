import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { IDashboardSarItem, SarStatus } from '../open-sars.component';

@Component({
  selector: 'yh-open-sars-item',
  templateUrl: './open-sars-item.component.html',
  styleUrls: ['./open-sars-item.component.scss'],
})
export class OpenSarsItemComponent implements OnInit {
  @Input()
  sar: IDashboardSarItem;

  SarStatus = SarStatus;

  circleIcon: IconDefinition = faCircle;

  constructor() {}

  ngOnInit(): void {}

  getStatusDescription(status: SarStatus): string {
    switch (status) {
      case SarStatus.Correction: {
        return 'Correction';
      }
      case SarStatus.Initial: {
        return 'Initial';
      }
      case SarStatus.Rejected: {
        return 'Rejected';
      }
      case SarStatus.Review: {
        return '90-Day Review';
      }
      default: {
        return 'Unknown';
      }
    }
  }
}
