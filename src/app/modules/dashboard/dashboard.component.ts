import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as CountrySummary from '../data/CountrySummary';



const SummaryData: Array<any> = CountrySummary.CountrySummary.Countries;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  barGraph;

  displayedColumns: string[] = ['Country', 'TotalConfirmed', 'TotalDeaths', 'TotalRecovered', 'Date'];
  dataSource = new MatTableDataSource(SummaryData);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.barGraph = this.dashboardService.barGraph();
    this.dataSource.paginator = this.paginator;
  }


}
