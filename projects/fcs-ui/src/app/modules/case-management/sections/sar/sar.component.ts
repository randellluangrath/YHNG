import { Component, OnInit } from '@angular/core';
import { ISuspiciousActivityReport } from '@fcs/app/domain/models/sar';
import { MockDataService } from '@fcs/app/services/mock-data.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-sar',
  templateUrl: './sar.component.html',
  styleUrls: ['./sar.component.scss'],
})
export class SarComponent implements OnInit {
  sars: ISuspiciousActivityReport[] = Array.from(new Array(10), () => {
    return this.mock.createSAR();
  });

  selectedSar: ISuspiciousActivityReport;

  showSarWizard: boolean = false;

  infoIcon: IconDefinition = faInfoCircle;

  constructor(private mock: MockDataService) {}

  ngOnInit(): void {}

  showWorkflow(): void {
    this.showSarWizard = true;
  }

  handleOnHide(): void {
    this.showSarWizard = false;
  }
}
