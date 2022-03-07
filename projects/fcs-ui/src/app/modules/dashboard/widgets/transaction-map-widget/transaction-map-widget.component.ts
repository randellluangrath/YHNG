import {
  Component,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'yh-transaction-map-widget',
  templateUrl: './transaction-map-widget.component.html',
  styleUrls: ['./transaction-map-widget.component.scss'],
})
export class TransactionMapWidgetComponent implements OnInit, OnDestroy {
  private chart: am4maps.MapChart;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone
  ) {}
  ngOnInit(): void {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create('chartdiv', am4maps.MapChart);

      this.chart = chart;

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      chart.homeZoomLevel = 1;

      // Create map polygon series
      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Exclude Antartica
      polygonSeries.exclude = ['AQ'];

      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true;

      // Configure series
      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = '{name}';
      polygonTemplate.polygon.fillOpacity = 0.6;

      // Create hover state and set alternative fill color
      var hs = polygonTemplate.states.create('hover');
      hs.properties.fill = chart.colors.getIndex(0);

      // Add image series
      var imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = 'longitude';
      imageSeries.mapImages.template.propertyFields.latitude = 'latitude';
      imageSeries.mapImages.template.tooltipText = '{title}';
      imageSeries.mapImages.template.propertyFields.url = 'url';

      var colorSet = new am4core.ColorSet();

      imageSeries.data = [
        {
          title: 'Brussels',
          latitude: 50.8371,
          longitude: 4.3676,
          color: colorSet.next(),
        },
        {
          title: 'Copenhagen',
          latitude: 55.6763,
          longitude: 12.5681,
          color: colorSet.next(),
        },
        {
          title: 'Paris',
          latitude: 48.8567,
          longitude: 2.351,
          color: colorSet.next(),
        },
        {
          title: 'Reykjavik',
          latitude: 64.1353,
          longitude: -21.8952,
          color: colorSet.next(),
        },
        {
          title: 'Moscow',
          latitude: 55.7558,
          longitude: 37.6176,
          color: colorSet.next(),
        },
        {
          title: 'Madrid',
          latitude: 40.4167,
          longitude: -3.7033,
          color: colorSet.next(),
        },
        {
          title: 'London',
          latitude: 51.5002,
          longitude: -0.1262,
          url: 'http://www.google.co.uk',
          color: colorSet.next(),
        },
        {
          title: 'Peking',
          latitude: 39.9056,
          longitude: 116.3958,
          color: colorSet.next(),
        },
        {
          title: 'New Delhi',
          latitude: 28.6353,
          longitude: 77.225,
          color: colorSet.next(),
        },
        {
          title: 'Tokyo',
          latitude: 35.6785,
          longitude: 139.6823,
          url: 'http://www.google.co.jp',
          color: colorSet.next(),
        },
        {
          title: 'Ankara',
          latitude: 39.9439,
          longitude: 32.856,
          color: colorSet.next(),
        },
        {
          title: 'Buenos Aires',
          latitude: -34.6118,
          longitude: -58.4173,
          color: colorSet.next(),
        },
        {
          title: 'Brasilia',
          latitude: -15.7801,
          longitude: -47.9292,
          color: colorSet.next(),
        },
        {
          title: 'Ottawa',
          latitude: 45.4235,
          longitude: -75.6979,
          color: colorSet.next(),
        },
        {
          title: 'Washington',
          latitude: 38.8921,
          longitude: -77.0241,
          color: colorSet.next(),
        },
        {
          title: 'Kinshasa',
          latitude: -4.3369,
          longitude: 15.3271,
          color: colorSet.next(),
        },
        {
          title: 'Cairo',
          latitude: 30.0571,
          longitude: 31.2272,
          color: colorSet.next(),
        },
        {
          title: 'Pretoria',
          latitude: -25.7463,
          longitude: 28.1876,
          color: colorSet.next(),
        },
      ];

      var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle.radius = 3;
      circle.propertyFields.fill = 'color';
      circle.nonScaling = true;

      var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
      circle2.radius = 3;
      circle2.propertyFields.fill = 'color';

      var animateBullet = (circle: any) => {
        if (!circle) {
          return;
        }
        let animation = circle.animate(
          [
            {
              property: 'scale',
              from: 1 / this.chart.zoomLevel,
              to: 5 / this.chart.zoomLevel,
            },
            { property: 'opacity', from: 1, to: 0 },
          ],
          1000,
          am4core.ease.circleOut
        );

        animation.events.on('animationended', (e: any) => {
          animateBullet.call(this, e.target.object);
        });
      };

      circle2.events.on('inited', function (event) {
        animateBullet.call(this, event.target);
      });
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
