import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  chartOptions = {};

  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Coronavirus Cases By State (USA) 06/11/2020'
    },
    subtitle: {
        text: 'Source: THE COVID TRACKING PROJECT'
    },
    xAxis: {
        categories: this.data[0],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Cases',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Positive',
        data: this.data[1]
    }, {
        name: 'Hospitalized Currently',
        data: this.data[2]
    }, {
        name: 'Recovered',
        data: this.data[3]
    }, {
        name: 'Death',
        data: this.data[4]
    }]
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }
}
