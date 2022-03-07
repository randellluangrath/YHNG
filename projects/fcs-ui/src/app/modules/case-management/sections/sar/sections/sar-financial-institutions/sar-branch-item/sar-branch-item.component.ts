import { Component, Input, OnInit } from '@angular/core';
import { ISarFinancialIntstitutionBranch } from '@fcs/app/domain/models/sar';

@Component({
  selector: 'yh-sar-branch-item',
  templateUrl: './sar-branch-item.component.html',
  styleUrls: ['./sar-branch-item.component.scss'],
})
export class SarBranchItemComponent implements OnInit {
  @Input()
  branch: ISarFinancialIntstitutionBranch;

  constructor() {}

  ngOnInit(): void {}

  getFullAddress(): string {
    return `${this.branch.address} ${this.branch.city} ${this.branch.state} ${this.branch.zipCode} ${this.branch.country}`;
  }
}
