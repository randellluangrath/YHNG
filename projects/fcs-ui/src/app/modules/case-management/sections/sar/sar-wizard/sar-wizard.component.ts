import { Component, Input, OnInit } from '@angular/core';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { ScrollSpyService } from 'ngx-scrollspy';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import {
  ISarViewChangeEvent,
  SarWizardService,
  SarWizardView,
} from './sar-wizard.service';

@Component({
  selector: 'yh-sar-wizard',
  templateUrl: './sar-wizard.component.html',
  styleUrls: ['./sar-wizard.component.scss'],
})
export class SarWizardComponent implements OnInit {
  @Input()
  sar: ISuspiciousActivityReport = this.mock.createSAR();

  viewState$: BehaviorSubject<SarWizardView> =
    new BehaviorSubject<SarWizardView>(SarWizardView.SuspiciousActivity);

  SarWizardView = SarWizardView;

  constructor(
    private mock: MockDataService,
    private sarService: SarWizardService
  ) {}

  ngOnInit() {
    this.sarService.events().subscribe((event: ISarViewChangeEvent) => {
      if (event == null || event.view == null) {
        this.viewState$.next(SarWizardView.Overview);
      } else {
        this.viewState$.next(event.view);
      }
    });
  }
}
