import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ITransaction } from '@fcs/app/domain/models/transaction';
import { FieldOption } from 'projects/shared/src/lib/models/models';
import * as faker from 'faker';
import * as _ from 'lodash';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { DialogService } from 'primeng/dynamicdialog';
import { ActivityStatisticsGraphComponent } from './activity-statistics-graph/activity-statistics-graph.component';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faChartBar as fasChartBar,
  faChartLine as fasChartLine,
} from '@fortawesome/free-solid-svg-icons';
import {
  faChartBar as falChartBar,
  faChartLine as falChartLine,
} from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'yh-activity-statistics',
  templateUrl: './activity-statistics.component.html',
  styleUrls: ['./activity-statistics.component.scss'],
})
export class ActivityStatisticsComponent implements OnInit, AfterViewInit {
  barIconLight: IconDefinition = falChartBar;
  barIconSolid: IconDefinition = fasChartBar;
  lineIconLight: IconDefinition = falChartLine;
  lineIconSolid: IconDefinition = fasChartLine;

  showAsBar: boolean;
  showAsLine: boolean;

  showFilters: boolean;
  showVisualization: boolean;

  activityRecords: IStatisticsRecord[] = [];
  activityTypes: string[] = [
    'Cash',
    'ATM',
    'Wire',
    'ACH',
    'Check',
    'Transfer',
    'Debit Totals',
    'Cash',
    'ATM',
    'Wire',
    'ACH',
    'Check',
    'Transfer',
    'Credit Totals',
  ];

  months: string[] = [
    'Q2 2021',
    'Q3 2021',
    'Q4 2021',
    'Q1 2022',
    'Q2 2022',
    'Q3 2022',
    'Q4 2022',
    'Q1 2023',
    'Q2 2023',
    'Q3 2023',
    'Q4 2023',
  ];

  //   months: string[] = [
  //     'Jan-21',
  //     'Feb-21',
  //     'Mar-21',
  //     'Apr-21',
  //     'May-21',
  //     'Jun-21',
  //     'Jul-21',
  //     'Aug-21',
  //     'Sept-21',
  //     'Oct-21',
  //     'Nov-21',
  //     'Dec-21',
  //   ];

  selectedTransactions: ITransaction[] = [];

  timePeriodColumns: ITimePeriodColumn[] = Array.from(new Array(11), (v, k) => {
    return {
      title: this.months[k],
    };
  });

  fgMedium: FormGroup;
  fcMedium: FormControl = new FormControl();

  treeData: any[] = [];

  mediumOptions: FieldOption<string>[] = [
    new FieldOption('Cash', 'Cash'),
    new FieldOption('ATM', 'ATM'),
    new FieldOption('Wire', 'Wire'),
    new FieldOption('ACH', 'ACH'),
    new FieldOption('Check', 'Check'),
    new FieldOption('Transfer', 'Transfer'),
  ];

  flatData: IActivitiesRow[] = [];
  lockedFlatData: IStatisticsRecord[] = [];

  constructor(public dialogService: DialogService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fgMedium = this.fb.group({
      fcMedium: this.fcMedium,
    });

    this.activityRecords = Array.from(new Array(14), (v, k) =>
      this.generateTimePeriodItem(k)
    );
    // this.lockedFlatData = [this.activityRecords.pop()];
  }

  ngAfterViewInit(): void {
    var parentWrapper: Element = document.getElementById('statisticsTables');

    var tables = parentWrapper.getElementsByClassName('p-datatable-wrapper');

    var debitTable = tables[0];
    var creditTable = tables[1];

    debitTable.addEventListener('scroll', () => {
      creditTable.scrollLeft = debitTable.scrollLeft;
    });

    creditTable.addEventListener('scroll', () => {
      debitTable.scrollLeft = creditTable.scrollLeft;
    });
  }

  handleAddNew(): void {}

  handleDrawerCancel(): void {
    this.showFilters = false;
  }

  handleOnHide(): void {
    this.showFilters = false;
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  isSelected(transaction: ITransaction) {
    return this.selectedTransactions.indexOf(transaction) > -1;
  }

  getSelectedTransactionsTotal(): number {
    if (!this.selectedTransactions) {
      return 0;
    }
    return _.sum(this.selectedTransactions.map((t) => t.credit));
  }

  private generateTimePeriodItem(id: number): IStatisticsRecord {
    return {
      activityName: this.activityTypes[id],
      timePeriods: Array.from(new Array(12), (v, k) => {
        return {
          label: this.months[k],
          credit: faker.random.float(),
          debit: faker.random.float(),
        };
      }),
    };
  }
}

export interface IStatisticsRecord {
  activityName: string;
  timePeriods: ITimePeriod[];
}

export interface ITimePeriod {
  label: string;
  debit: number;
  credit: number;
}

interface ITimePeriodColumn {
  title: string;
}

interface IActivitiesRow {
  timeperiod: string;
  cash: number;
  cashChange: number;
  atm: number;
  atmChange: number;
  wire: number;
  wireChange: number;
  ach: number;
  achChange: number;
  check: number;
  checkChange: number;
  transfer: number;
  transferChange: number;
  total: number;
}
