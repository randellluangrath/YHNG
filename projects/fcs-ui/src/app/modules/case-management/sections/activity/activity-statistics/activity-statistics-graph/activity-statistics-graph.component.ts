import { Component, Input, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {
  IStatisticsRecord,
  ITimePeriod,
} from '../activity-statistics.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'yh-activity-statistics-graph',
  templateUrl: './activity-statistics-graph.component.html',
  styleUrls: ['./activity-statistics-graph.component.scss'],
})
export class ActivityStatisticsGraphComponent implements OnInit {
  @Input()
  records: IStatisticsRecord[];

  @Input()
  months: string[];

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);

    if (!this.records || !this.months) {
      this.records = this.config.data.records;
      this.months = this.config.data.months;
    }

    // Create chart instance
    var chart = am4core.create('chartdiv', am4charts.XYChart);

    var chartableData = this.records.filter(
      (r) => r.activityName && r.activityName != 'Totals'
    );

    // 1. Object represents a single month.
    const data: Object[] = this.months.map((m) => {
      return {
        date: m,
      };
    });

    // 2. On each object, need to set each activity of that month and type
    chartableData.forEach((record: IStatisticsRecord, index: number) => {
      record.timePeriods.forEach(
        (period: ITimePeriod, timePeriodIndex: number) => {
          var chartTimePeriod = data[timePeriodIndex];
          chartTimePeriod[record.activityName + '-Debit'] = period.debit;
          chartTimePeriod[record.activityName + '-Credit'] = period.credit;
        }
      );
    });

    // Add data
    chart.data = data;

    // Create axes

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.date = 'Date';
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
    dateAxis.renderer.minGridDistance = 50;

    // 3. Then assign the value to it.
    chartableData.forEach((record: IStatisticsRecord) => {
      this.createTimeSeries(
        chart,
        record.activityName + '-Credit',
        'C: ' + record.activityName
      );
      this.createTimeSeries(
        chart,
        record.activityName + '-Debit',
        'D: ' + record.activityName
      );
    });

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'left';
    chart.legend.maxColumns = 3;
    chart.legend.width = 400;
    chart.legend.valign = 'top';
  }

  createTimeSeries(
    chart: am4charts.XYChart,
    field: string,
    name: string
  ): void {
    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = 'date';
    series.strokeWidth = 2;
    // series.tensionX = 0.8;
    series.strokeOpacity = 0.3;
    series.name = name;

    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.strokeWidth = 2;
    bullet.stroke = am4core.color('#fff');
  }
}
