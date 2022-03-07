import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as faker from 'faker';

@Component({
  selector: 'yh-upcoming-edd-widget',
  templateUrl: './upcoming-edd-widget.component.html',
  styleUrls: ['./upcoming-edd-widget.component.scss'],
})
export class UpcomingEddWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    am4core.useTheme(am4themes_animated);

    // Create chart instance
    var chart = am4core.create('upcomingEddMap', am4charts.XYChart);

    chart.maskBullets = false;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

    xAxis.dataFields.category = 'weekday';
    yAxis.dataFields.category = 'hour';

    xAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.minGridDistance = 40;
    xAxis.renderer.opposite = true;

    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.inversed = true;
    yAxis.renderer.minGridDistance = 30;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = 'weekday';
    series.dataFields.categoryY = 'hour';
    series.dataFields.value = 'value';
    series.sequencedInterpolation = true;
    series.defaultState.transitionDuration = 3000;

    let bgColor = new am4core.InterfaceColorSet().getFor('background');

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 1;
    columnTemplate.strokeOpacity = 0.2;
    columnTemplate.stroke = bgColor;
    columnTemplate.tooltipText =
      "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";
    columnTemplate.width = am4core.percent(100);
    columnTemplate.height = am4core.percent(100);

    series.heatRules.push({
      target: columnTemplate,
      property: 'fill',
      min: am4core.color('#fefa77'),
      max: am4core.color('#fe141a'),
    });

    // heat legend
    // let heatLegend = chart.bottomAxesContainer.createChild(
    //   am4charts.HeatLegend
    // );
    // heatLegend.width = am4core.percent(100);
    // heatLegend.series = series;
    // heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
    // heatLegend.valueAxis.renderer.minGridDistance = 30;

    // heat legend behavior
    series.columns.template.events.on('over', function (event) {
      var column = event.target;
      var value = column.dataItem['value'];
      //   if (!isNaN(value)) {
      //     heatLegend.valueAxis.showTooltipAt(value);
      //   } else {
      //     heatLegend.valueAxis.hideTooltip();
      //   }
    });

    series.columns.template.events.on('hit', function (event) {
      var column = event.target;
      var value = column.dataItem['value'];
      //   if (!isNaN(value)) {
      //     heatLegend.valueAxis.showTooltipAt(value);
      //   } else {
      //     heatLegend.valueAxis.hideTooltip();
      //   }
    });
    series.columns.template.events.on('out', function (event) {
      //   heatLegend.valueAxis.hideTooltip();
    });

    chart.data = [
      {
        hour: 'Feb-22',
        weekday: '90 Day',
        value: 412,
      },
      {
        hour: 'Feb-22',
        weekday: 'Cases',
        value: 530,
      },
      {
        hour: 'Feb-22',
        weekday: 'EDD',
        value: 628,
      },
      {
        hour: 'Feb-22',
        weekday: 'SARs',
        value: 1275,
      },
      {
        hour: 'Mar-22',
        weekday: '90 Day',
        value: 122,
      },
      {
        hour: 'Mar-22',
        weekday: 'Cases',
        value: 870,
      },
      {
        hour: 'Mar-22',
        weekday: 'EDD',
        value: 868,
      },
      {
        hour: 'Mar-22',
        weekday: 'SARs',
        value: 325,
      },
      {
        hour: 'Apr-22',
        weekday: '90 Day',
        value: 1122,
      },
      {
        hour: 'Apr-22',
        weekday: 'Cases',
        value: 5120,
      },
      {
        hour: 'Apr-22',
        weekday: 'EDD',
        value: 322,
      },
      {
        hour: 'Apr-22',
        weekday: 'SARs',
        value: 123,
      },
      {
        hour: 'May-22',
        weekday: '90 Day',
        value: 1332,
      },
      {
        hour: 'May-22',
        weekday: 'Cases',
        value: 5530,
      },
      {
        hour: 'May-22',
        weekday: 'EDD',
        value: 658,
      },
      {
        hour: 'May-22',
        weekday: 'SARs',
        value: 1265,
      },
      {
        hour: 'Jun-22',
        weekday: '90 Day',
        value: 1122,
      },
      {
        hour: 'Jun-22',
        weekday: 'Cases',
        value: 530,
      },
      {
        hour: 'Jun-22',
        weekday: 'EDD',
        value: 6448,
      },
      {
        hour: 'Jun-22',
        weekday: 'SARs',
        value: 1255,
      },
    ];
  }
}
