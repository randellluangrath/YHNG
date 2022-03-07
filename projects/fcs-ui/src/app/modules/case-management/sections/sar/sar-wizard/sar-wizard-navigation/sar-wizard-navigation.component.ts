import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@fcs/app/@core';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';
import { faCircle, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import {
  ISarViewChangeEvent,
  SarWizardService,
  SarWizardView,
} from '../sar-wizard.service';

@UntilDestroy()
@Component({
  selector: 'yh-sar-wizard-navigation',
  templateUrl: './sar-wizard-navigation.component.html',
  styleUrls: ['./sar-wizard-navigation.component.scss'],
})
export class SarWizardNavigationComponent implements OnInit {
  @Input()
  sar: ISuspiciousActivityReport;

  currentView: SarWizardView;
  targetFinancialId: string;

  circleIcon: IconDefinition = faCircle;

  SarWizardView = SarWizardView;

  constructor(private sarService: SarWizardService) {}

  ngOnInit(): void {
    this.sarService.events().subscribe((event: ISarViewChangeEvent) => {
      this.currentView = event.view;
      this.targetFinancialId = event.financialInstitutionId;
    });
  }

  goToOverview(): void {
    this.sarService.showOverview();
  }

  goToSubjects(): void {
    this.sarService.showSubjects();
  }

  goToFinancialInstitutionsById(id: string) {
    this.sarService.showFinancialInstitution(id);
  }

  goToFilingInstitution(): void {
    this.sarService.showFilingInstitution();
  }

  goToSuspiciousActivity(): void {
    this.sarService.showSuspiciousActivity(null);
  }
}
