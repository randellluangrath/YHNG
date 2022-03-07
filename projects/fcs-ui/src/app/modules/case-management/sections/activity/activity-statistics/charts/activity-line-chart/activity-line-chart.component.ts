import { Component, Input, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as faker from 'faker';
import {
  IStatisticsRecord,
  ITimePeriod,
} from '../../activity-statistics.component';

@Component({
  selector: 'yh-activity-line-chart',
  templateUrl: './activity-line-chart.component.html',
  styleUrls: ['./activity-line-chart.component.scss'],
})
export class ActivityLineChartComponent implements OnInit {
  @Input()
  records: IStatisticsRecord[];

  @Input()
  months: string[];

  constructor() {}

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create('chartdiv', am4charts.XYChart);

    // 1. Object represents a single month.
    const data: Object[] = this.months.map((m) => {
      return {
        date: m,
        credit: faker.random.float(),
        debit: faker.random.float(),
      };
    });

    // Add data
    chart.data = data;

    chart.colors.list = [am4core.color('#90cc62'), am4core.color('#e54956')];

    // Create axes

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.date = 'Date';
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
    dateAxis.renderer.minGridDistance = 50;

    this.createTimeSeries(chart, 'credit', 'C: ');
    this.createTimeSeries(chart, 'debit', 'D: ');

    // chart.legend = new am4charts.Legend();
    // chart.legend.position = 'left';
    // chart.legend.maxColumns = 3;
    // chart.legend.width = 400;
    // chart.legend.valign = 'top';
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
