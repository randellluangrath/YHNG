import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as faker from 'faker';
@Component({
  selector: 'yh-activity-stacked-bar-chart',
  templateUrl: './activity-stacked-bar-chart.component.html',
  styleUrls: ['./activity-stacked-bar-chart.component.scss'],
})
export class ActivityStackedBarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create('chartdiv', am4charts.XYChart);

    // Add data
    chart.data = [
      {
        month: 'Jan',
        male: -0.1,
        female: 0.3,
      },
      {
        month: 'Feb',
        male: -0.2,
        female: 0.3,
      },
      {
        month: 'Mar',
        male: -0.3,
        female: 0.6,
      },
      {
        month: 'Apr',
        male: -0.5,
        female: 0.8,
      },
      {
        month: 'May',
        male: -0.8,
        female: 1.0,
      },
      {
        month: 'June',
        male: -1.1,
        female: 1.3,
      },

      {
        month: 'July',
        male: -2.2,
        female: 2.5,
      },
      {
        month: 'Aug',
        male: -2.8,
        female: 3.0,
      },
      {
        month: 'Sept',
        male: -3.4,
        female: 3.6,
      },
      {
        month: 'Oct',
        male: -4.2,
        female: 4.1,
      },
      {
        month: 'Nov',
        male: -5.2,
        female: 4.8,
      },
      {
        month: 'Dec',
        male: -5.6,
        female: 5.1,
      },
    ];

    chart.data.forEach((v) => {
      v.male = faker.datatype.number({ min: 5, max: 5000 });
      v.female = -faker.datatype.number({ min: 5, max: 5000 });
    });

    // Use only absolute numbers
    chart.numberFormatter.numberFormat = '#.#s';

    chart.colors.list = [am4core.color('#90cc62'), am4core.color('#e54956')];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'month';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 25;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.extraMin = 0.1;
    valueAxis.extraMax = 0.1;
    // valueAxis.renderer.minGridDistance = 25;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add('text', function (text) {
      return text == 'Cash In' || text == 'Cash Out' ? text : '$' + text;
    });

    // Create series
    let male = chart.series.push(new am4charts.ColumnSeries());
    male.dataFields.valueX = 'male';
    male.dataFields.categoryY = 'month';
    male.clustered = false;

    let maleLabel = male.bullets.push(new am4charts.LabelBullet());
    maleLabel.label.text = '${valueX}';
    maleLabel.label.hideOversized = false;
    maleLabel.label.truncate = false;
    maleLabel.label.horizontalCenter = 'right';
    maleLabel.label.dx = -10;

    let female = chart.series.push(new am4charts.ColumnSeries());
    female.dataFields.valueX = 'female';
    female.dataFields.categoryY = 'month';
    female.clustered = false;

    let femaleLabel = female.bullets.push(new am4charts.LabelBullet());
    femaleLabel.label.text = '${valueX}';
    femaleLabel.label.hideOversized = false;
    femaleLabel.label.truncate = false;
    femaleLabel.label.horizontalCenter = 'left';
    femaleLabel.label.dx = 10;

    // let maleRange = valueAxis.axisRanges.create();
    // maleRange.value = -10;
    // maleRange.endValue = 0;
    // maleRange.label.text = 'Cash In';
    // maleRange.label.fill = chart.colors.list[0];
    // maleRange.label.dy = 20;
    // maleRange.label.fontWeight = '600';
    // maleRange.grid.strokeOpacity = 1;
    // maleRange.grid.stroke = male.stroke;

    // let femaleRange = valueAxis.axisRanges.create();
    // femaleRange.value = 0;
    // femaleRange.endValue = 10;
    // femaleRange.label.text = 'Cash Out';
    // femaleRange.label.fill = chart.colors.list[1];
    // femaleRange.label.dy = 20;
    // femaleRange.label.fontWeight = '600';
    // femaleRange.grid.strokeOpacity = 1;
    // femaleRange.grid.stroke = female.stroke;
  }
}
