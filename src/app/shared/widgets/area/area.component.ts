import { Component, OnInit, Input } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};

  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Coronavirus in 6 Countries Jan 22, 2020 - Jun 11, 2020'
      },
      subtitle: {
        text: 'Source: CORONAVIRUS DATA API'
      },
      tooltip: {
        split: true,
        // valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: "Date"
        }
      },
      yAxis: {
        title: {
          text: "Confirmed Cases"
        }
      },
      exporting: {
        enabled: true,
      },
      series: [{
        name:'USA',
        data: this.data[0],
        pointStart: Date.UTC(2020, 0, 22),
        pointInterval: 3600 * 1000  * 24 // one hour
      },{
        name:'Brazil',
        data: this.data[3],
        pointStart: Date.UTC(2020, 1, 26),
        pointInterval: 3600 * 1000  * 24 // one hour
      },{
        name:'Russia',
        data: this.data[4],
        pointStart: Date.UTC(2020, 0, 31),
        pointInterval: 3600 * 1000  * 24 // one hour
      },{
        name:'Italy',
        data: this.data[5],
        pointStart: Date.UTC(2020, 0, 31),
        pointInterval: 3600 * 1000  * 24 // one hour
      },{
        name:'Canada',
        data: this.data[2],
        pointStart: Date.UTC(2020, 0, 26),
        pointInterval: 3600 * 1000  * 24 // one hour
      },{
        name:'Mexico',
        data: this.data[1],
        pointStart: Date.UTC(2020, 1, 28),
        pointInterval: 3600 * 1000  * 24 // one hour
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
