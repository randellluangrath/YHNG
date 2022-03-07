import { Component, Input, OnInit } from '@angular/core';
import {
  ISarFinancialIntstitution,
  ISuspiciousActivityReport,
} from '@fcs/app/domain/models/sar';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  ISarViewChangeEvent,
  SarWizardService,
  SarWizardView,
} from '../../sar-wizard/sar-wizard.service';

@Component({
  selector: 'yh-sar-financial-institutions',
  templateUrl: './sar-financial-institutions.component.html',
  styleUrls: ['./sar-financial-institutions.component.scss'],
})
export class SarFinancialInstitutionsComponent implements OnInit {
  @Input()
  sar: ISuspiciousActivityReport;

  selectedInstitution: ISarFinancialIntstitution;

  showLookupDrawer: boolean = false;

  circleIcon: IconDefinition = faCircle;

  constructor(private sarService: SarWizardService) {}

  ngOnInit(): void {
    this.sarService.events().subscribe((event: ISarViewChangeEvent) => {
      if (event.view === SarWizardView.FinancialActivity) {
        this.selectedInstitution = this.sar.financialInstitutions.find(
          (f) => f.id === event.financialInstitutionId
        );
      }
    });
  }

  log(event: any): void {
    console.log(event);
  }
}
