import { Injectable } from '@angular/core';
import * as BigChartUsaData from './data/UsaData';
import * as BigChartMexicoData from './data/MexicoData';
import * as BigChartCanadaData from './data/CanadaData';
import * as BigChartBrazilData from './data/BrazilData';
import * as BigChartRussiaData from './data/RussiaData';
import * as BigChartItalyData from './data/ItalyData';
import * as UnitedStatesData from './data/UnitedStatesData';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  key: string;
  bigChartUsa: Array<number>;
  bigChartMexico: Array<number>;
  bigChartCanada: Array<number>;
  bigChartBrazil: Array<number>;
  bigChartRussia: Array<number>;
  bigChartItaly: Array<number>;
  bigChartDataAggregate: Array<Array<number>>;



  constructor() {}

  bigChart() {
    this.bigChartUsa = this.extractTotalCasesByCountry(BigChartUsaData.BigChartUsaData);
    this.bigChartMexico =  this.extractTotalCasesByCountry(BigChartMexicoData.BigChartMexicoData);
    this.bigChartCanada = this.extractTotalCasesByCountry(BigChartCanadaData.BigChartCanadaData);
    this.bigChartBrazil = this.extractTotalCasesByCountry(BigChartBrazilData.BigChartBrazilData);
    this.bigChartRussia = this.extractTotalCasesByCountry(BigChartRussiaData.BigChartRussiaData);
    this.bigChartItaly = this.extractTotalCasesByCountry(BigChartItalyData.BigChartItalyData);

    this.bigChartDataAggregate = [this.bigChartUsa, this.bigChartMexico, this.bigChartCanada, this.bigChartBrazil, this.bigChartRussia, this.bigChartItaly];
    return this.bigChartDataAggregate;
  }

  extractTotalCasesByCountry(data) {
    let store = [];
        for (this.key in data.timelineitems[0]) {
        let total_cases = data.timelineitems[0][this.key].total_cases;
        store.push(total_cases);
        } 
        return store;   
    }
        

  cards() {
    return [71, 78, 39, 66];
  }

  barGraph() {
    let data = this.extractStatesData(UnitedStatesData.UnitedStatesData);
    return data;
  }


  extractStatesData(data) {
    let item;
    let states = [];
    let positive = [];
    let hospitalized = [];
    let recovered = [];
    let death = [];
    
    for(item in data) {
      states.push(data[item].state);
      positive.push(data[item].positive);
      hospitalized.push(data[item].hospitalizedCurrently);
      recovered.push(data[item].recovered);
      death.push(data[item].death);

    }
    let UnitedStatesDataFiltered = [states, positive, hospitalized, recovered, death];
    return UnitedStatesDataFiltered; 
  }


  pieChart() {
    const usa: number = 2018875/2247070;
    const mex: number = 129184/2247070;
    const can: number = 99011/2247070;
    return [{
      name: 'USA',
      y: usa,
      sliced: true,
      selected: true
    }, {
      name: 'Mexico',
      y: mex
    }, {
      name: 'Canada',
      y: can
    }];
  }
}
